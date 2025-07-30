import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(['wip', 'released', 'planned', 'on hold']),
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

const draft = defineCollection({
	loader: glob({ base: './src/content/draft', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		plannedDate: z.string().optional(),
		progress: z.enum(['outlined', 'writing', 'reviewing', 'ready']).optional(),
	}),
});

const future = defineCollection({
	loader: glob({ base: './src/content/future', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		year: z.number(),
		quarter: z.number(),
		items: z.array(z.object({
			title: z.string(),
		})),
	}),
});

const resume = defineCollection({
	loader: glob({ base: './src/content/resume', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		name: z.string(),
		title: z.string(),
		location: z.string(),
		linkedin: z.string().url().optional(),
		github: z.string().url().optional(),
	}),
});

export const collections = { blog, projects, draft, future, resume };
