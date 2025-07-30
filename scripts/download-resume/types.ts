export interface ResumeFrontmatter {
  name?: string;
  title?: string;
  location?: string;
  linkedin?: string;
  github?: string;
}

export interface ParsedResume {
  frontmatter: ResumeFrontmatter;
  content: string;
}

export interface PdfOptions {
  format: 'A4';
  printBackground: boolean;
  margin: {
    top: string;
    right: string;
    bottom: string;
    left: string;
  };
}
