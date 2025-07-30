#!/usr/bin/env node

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { parseMarkdownFrontmatter } from './parser.js';
import { markdownToHtml } from './markdown-to-html.js';
import { createHtmlTemplate } from './template.js';
import { parseVersionFromArgs, createFilename } from './utils.js';
import { readResumeContent } from './file-operations.js';
import { generatePdf } from './pdf-generator.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '../..');

const main = async (): Promise<void> => {
  const args = process.argv.slice(2);
  const version = parseVersionFromArgs(args);

  try {
    console.log(`📄 Generating PDF for resume version: ${version}`);
    
    const markdownContent = await readResumeContent(version);
    const { frontmatter, content } = parseMarkdownFrontmatter(markdownContent);
    const htmlContent = markdownToHtml(content);
    const fullHtml = createHtmlTemplate(frontmatter, htmlContent);
    
    const filename = createFilename(frontmatter.name || 'Julian Ramirez');
    const outputPath = join(PROJECT_ROOT, filename);
    
    await generatePdf(fullHtml, outputPath);
    
    console.log(`✅ PDF generated successfully: ${filename}`);
  } catch (error) {
    console.error(`❌ Error generating PDF: ${(error as Error).message}`);
    process.exit(1);
  }
};

main();
