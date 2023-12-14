import { string } from "astro/zod";
import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    updatedDate: z.string().transform((str) => new Date(str)).optional(),
    heroImage: z.string(),
    badge: z.string().optional(),
    custom_link_label: z.string().optional().default(""),
    custom_link: z.string().default('#'),
    has_link: z.boolean().default(false),
    tags: z.array(z.string())
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    details: z.boolean().optional(),
    custom_link_label: z.string(),
    custom_link: z.string().optional().default('#'),
    has_link: z.boolean().default(false),
    pubDate: z.string().transform((str) => new Date(str)),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
    detailImage: z.string().optional(),
    detailImageDesc: z.string().optional(),
    tags: z.array(z.string()),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
    'blog': blogCollection,
    'projects' : projectCollection
}