import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '../..');

export const readResumeContent = async (version: string = 'main'): Promise<string> => {
  const filePath = join(PROJECT_ROOT, 'src', 'content', 'resume', `${version}.md`);
  try {
    return await readFile(filePath, 'utf-8');
  } catch (error) {
    throw new Error(`Resume file not found: ${filePath}`);
  }
};
