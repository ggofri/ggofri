import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(['wip', 'released', 'planned', 'on hold', 'service', 'building in public', 'open source']),
		links: z.array(z.object({
			label: z.string(),
			url: z.string().url(),
		})).optional(),
		logo: z.string().optional(),
		releaseInfo: z.string().optional(),
		startDate: z.coerce.date().optional(),
		releaseDate: z.coerce.date().optional(),
		featured: z.boolean().optional(),
		volunteer: z.boolean().optional(),
	}),
});

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { blog, projects, pages };
