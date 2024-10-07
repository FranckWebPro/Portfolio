import { enum as zEnum, object, string, number, array, boolean } from "zod";

export const ProjectSchema = object({
  id: number(),
  title: string(),
  description: string(),
  client_name: string(),
  preview_picture_url: string(),
  link: string(),
  github_repo: string(),
  published: boolean(),
  status: zEnum(["Terminé", "En cours de développement"]),
  stacks_id: array(string()),
  date: string(),
});

export const StackSchema = object({
  id: number(),
  name: string(),
  logo: string(),
  stack_link: string(),
});

export const CreateProject = ProjectSchema.omit({
  id: true,
  date: true,
});

export const CreateStack = StackSchema.omit({
  id: true,
});

export const signInSchema = object({
  email: string({ required_error: "Email is required" }).min(1, "Email is required").email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
