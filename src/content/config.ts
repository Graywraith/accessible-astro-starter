import { string } from "astro/zod";
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      image: z.string(),
      description: z.string(),
      draft: z.boolean().default(false),
      pubDate: z.string().transform((str) => new Date(str)),
      updatedDate: z.string().transform((str) => new Date(str)).optional(),
      badge: z.string().optional(),
    }),
  });
  
  const projectCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
      details: z.boolean().optional(),
      image: z.string(),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      updatedDate: z.string().transform((str) => new Date(str)).optional(),
      badge: z.string().optional(),
    }),
  });

export const collections = {
    'posts': blogCollection,
    'projects' : projectCollection
}