#!/usr/bin/env node

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { mdToPdf } from 'md-to-pdf';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

const parseVersionFromArgs = (args: string[]) => {
  return args.length > 0 ? args[0] : 'main';
};

const main = async (): Promise<void> => {
  const args = process.argv.slice(2);
  const version = parseVersionFromArgs(args);

  try {
    console.log(`📄 Generating PDF for resume version: ${version}`);
    
    const resumePath = join(PROJECT_ROOT, 'src', 'content', 'resume', `${version}.md`);
    const markdownContent = await readFile(resumePath, 'utf-8');
    
    const outputFileName = version === 'main' ? 'Julian_Ramirez_Resume.pdf' : `Julian_Ramirez_Resume_${version}.pdf`;
    const outputPath = join(PROJECT_ROOT, outputFileName);
    
    await mdToPdf({ content: markdownContent }, { dest: outputPath });
    
    console.log(`✅ PDF generated successfully: Julian_Ramirez_Resume_${version}.pdf`);
  } catch (error) {
    console.error(`❌ Error generating PDF: ${(error as Error).message}`);
    process.exit(1);
  }
};

main();
