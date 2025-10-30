#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PREVIEW_DIR = 'public/images/previews';
const DIST_DIR = 'dist';

// Ensure preview directory exists
if (!fs.existsSync(PREVIEW_DIR)) {
  fs.mkdirSync(PREVIEW_DIR, { recursive: true });
}

// Get staged content files
function getStagedContentFiles() {
  try {
    const output = execSync('git diff --cached --name-only', { encoding: 'utf8' });
    return output.split('\n').filter(line => line.startsWith('src/content/') && (line.endsWith('.md') || line.endsWith('.mdx')));
  } catch (error) {
    console.error('Error getting staged files:', error);
    return [];
  }
}

// Build the site
function buildSite() {
  console.log('Building site...');
  execSync('npm run build', { stdio: 'inherit' });
}

// Start local server
function startServer() {
  console.log('Starting local server...');

  const server = createServer((req, res) => {
    const filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
      }[ext] || 'text/plain';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(fs.readFileSync(filePath));
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
      resolve(server);
    });
  });
}

// Generate slug from file path
function getSlug(filePath) {
  const relativePath = path.relative('src/content', filePath);
  let slug = relativePath.replace(/\.(md|mdx)$/, '').replace(/\/index$/, '');

  // Remove collection prefix for pages
  if (slug.startsWith('pages/')) {
    slug = slug.substring(6); // remove 'pages/'
  }

  return slug || '/';
}

// Take screenshot
async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: outputPath, fullPage: false });
  await browser.close();
}

// Update frontmatter
function updateFrontmatter(filePath, imagePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  // Find frontmatter
  let frontmatterStart = -1;
  let frontmatterEnd = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      if (frontmatterStart === -1) {
        frontmatterStart = i;
      } else {
        frontmatterEnd = i;
        break;
      }
    }
  }

  if (frontmatterStart === -1 || frontmatterEnd === -1) {
    console.error('No frontmatter found in', filePath);
    return;
  }

  // Check if image already exists
  let hasImage = false;
  for (let i = frontmatterStart + 1; i < frontmatterEnd; i++) {
    if (lines[i].startsWith('image:')) {
      lines[i] = `image: ${imagePath}`;
      hasImage = true;
      break;
    }
  }

  if (!hasImage) {
    lines.splice(frontmatterEnd, 0, `image: ${imagePath}`);
  }

  fs.writeFileSync(filePath, lines.join('\n'));
}

// Clean up old images
function cleanupOldImages() {
  const allImageNames = new Set();

  // Get all content files
  const contentFiles = execSync('find src/content -name "*.md" -o -name "*.mdx"', { encoding: 'utf8' }).split('\n').filter(Boolean);
  contentFiles.forEach(file => {
    const slug = getSlug(file);
    const imageName = (slug === '/' ? 'index' : slug.replace(/\//g, '-')) + '.png';
    allImageNames.add(imageName);
  });

  // Get all preview images
  if (fs.existsSync(PREVIEW_DIR)) {
    const images = fs.readdirSync(PREVIEW_DIR).filter(file => file.endsWith('.png'));
    images.forEach(image => {
      if (!allImageNames.has(image)) {
        fs.unlinkSync(path.join(PREVIEW_DIR, image));
        console.log('Removed outdated image:', image);
      }
    });
  }
}

async function main() {
  const stagedFiles = getStagedContentFiles();
  if (stagedFiles.length === 0) {
    console.log('No staged content files to process.');
    return;
  }

  console.log('Processing files:', stagedFiles);

  buildSite();
  const server = await startServer();

  for (const file of stagedFiles) {
    const slug = getSlug(file);
    const url = `http://localhost:3000${slug === '/' ? '' : slug}`;
    const imageName = (slug === '/' ? 'index' : slug.replace(/\//g, '-')) + '.png';
    const imagePath = path.join(PREVIEW_DIR, imageName);
    const relativeImagePath = `/images/previews/${imageName}`;

    console.log(`Generating preview for ${file} -> ${url}`);
    await takeScreenshot(url, imagePath);
    updateFrontmatter(file, relativeImagePath);
    console.log(`Updated ${file} with image: ${relativeImagePath}`);
  }

  server.close();
  cleanupOldImages();
  console.log('Done!');
}

main().catch(console.error);