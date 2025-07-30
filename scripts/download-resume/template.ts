import type { ResumeFrontmatter } from './types.js';

export const createHtmlTemplate = (frontmatter: ResumeFrontmatter, content: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${frontmatter.name || 'Resume'}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 0.75rem;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: white;
        }
        h1 { 
            font-size: 1.5rem; 
            color: #2c3e50; 
            margin-bottom: 0.5rem;
            border-bottom: 3px solid #3498db;
            padding-bottom: 0.5rem;
        }
        h2 { 
            font-size: 1rem; 
            color: #34495e; 
            margin: 2rem 0 1rem 0;
            border-left: 4px solid #3498db;
            padding-left: 1rem;
        }
        h3 { 
            font-size: 0.875rem; 
            color: #2c3e50; 
            margin: 1.5rem 0 0.5rem 0;
        }
        .header { 
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #ecf0f1;
        }
        .contact-info { 
            font-size: 0.75rem; 
            color: #7f8c8d;
            margin-top: 0.5rem;
        }
        .job-title { 
            font-size: 0.875rem; 
            margin: 1rem 0 0.3rem 0;
            color: #2c3e50;
        }
        .job-period { 
            font-style: italic; 
            color: #7f8c8d;
            margin-bottom: 0.8rem;
        }
        ul { 
            margin: 0.5rem 0 1rem 1.5rem;
        }
        li { 
            margin-bottom: 0.3rem;
        }
        hr { 
            border: none; 
            height: 1px; 
            background: #bdc3c7;
            margin: 2rem 0;
        }
        p { 
            margin-bottom: 1rem;
        }
        strong { 
            color: #2c3e50;
        }
        .block {
            display: block;
        }
        @media print {
            body { padding: 16px; font-size: 12px; }
            h1 { font-size: 20px; }
            h2 { font-size: 14px; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${frontmatter.name || 'Resume'}</h1>
        ${frontmatter.title ? `<p><strong>${frontmatter.title}</strong></p>` : ''}
        <div class="contact-info">
            ${frontmatter.location ? `<span>${frontmatter.location}</span>` : ''}
            ${frontmatter.linkedin ? `<a href="${frontmatter.linkedin}" class="block" target="_blank" rel="noopener noreferrer">${frontmatter.linkedin.replace('https://', '')}</a>` : ''}
            ${frontmatter.github ? `<a href="${frontmatter.github}" class="block" target="_blank" rel="noopener noreferrer">${frontmatter.github.replace('https://', '')}</a>` : ''}
        </div>
    </div>
    ${content}
</body>
</html>
`;
