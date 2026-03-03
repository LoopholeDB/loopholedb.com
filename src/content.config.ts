import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const loopholes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './LHDB/us' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    country: z.string(),
    difficulty: z.string(),
    potential_savings: z.string().optional(),
    last_verified: z.string(),
    applicable_states: z.string(),
    risk_level: z.string(),
    template_url: z.string().optional(),
    template_label: z.string().optional(),
  }),
});

const loopholes_ca = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './LHDB/ca' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    category: z.string(),
    country: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    difficulty: z.string(),
    lastUpdated: z.string(),
    template_url: z.string().optional(),
    template_label: z.string().optional(),
  }),
});

export const collections = { loopholes, loopholes_ca };
