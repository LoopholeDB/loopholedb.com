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
  }),
});

export const collections = { loopholes };
