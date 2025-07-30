import type { ResumeFrontmatter, ParsedResume } from './types.js';

export const parseMarkdownFrontmatter = (content: string): ParsedResume => {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) return { frontmatter: {}, content };
  
  const frontmatterText = frontmatterMatch[1];
  const bodyContent = frontmatterMatch[2];
  
  const frontmatter = frontmatterText
    .split('\n')
    .filter(line => line.trim())
    .reduce((acc: ResumeFrontmatter, line) => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
        (acc as any)[key.trim()] = value;
      }
      return acc;
    }, {});
  
  return { frontmatter, content: bodyContent };
};
