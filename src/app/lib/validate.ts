import { z } from "zod";

export const FormSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  client_name: z.string(),
  preview_picture_url: z.string(),
  link: z.string(),
  github_repo: z.string(),
  published: z.boolean(),
  status: z.enum(["Terminé", "En cours de développement"]),
  stacks_id: z.array(z.string()),
  date: z.string(),
});

export const CreateProject = FormSchema.omit({
  id: true,
  date: true,
});
