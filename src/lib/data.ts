"use server";

import { sql } from "@vercel/postgres";
import { User, Stack, ProjectWithStacks, UserCredentials } from "./definitions";
import { revalidatePath } from "next/cache";

export async function getUserCredentials(email: string): Promise<UserCredentials | null> {
  try {
    const data = await sql<UserCredentials>`
        SELECT email, password
        FROM users
        WHERE email = ${email}
      `;
    const user: UserCredentials = data.rows[0];
    return user;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user credentials.");
  }
}

export async function fetchUser() {
  try {
    const data = await sql<User>`SELECT
    id,
    firstname,
    lastname,
    email,
    age,
    short_description,
    long_description,
    picture_url,
    github_link,
    linkedin_link
    FROM users`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

export async function fetchStacks(): Promise<Stack[]> {
  try {
    const data = await sql`SELECT * FROM stacks`;
    return data.rows as Stack[];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest stacks.");
  }
}

export async function browseProjectsWithStacks() {
  try {
    const projectWithStacks = await sql<ProjectWithStacks>`
      SELECT
        projects.id,
        projects.title,
        projects.description,
        projects.client_name,
        projects.preview_picture_url,
        projects.link,
        projects.github_repo,
        projects.published,
        projects.status,
        jsonb_agg(
            jsonb_build_object(
                'id', stacks.id,
                'name', stacks.name,
                'logo', stacks.logo
            )
        ) AS project_stacks 
     FROM projects
     INNER JOIN projects_stacks ON projects_stacks.project_id = projects.id
     INNER JOIN stacks ON projects_stacks.stack_id = stacks.id
     GROUP BY projects.id
     ORDER BY projects.id ASC
    `;
    return projectWithStacks.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Project with stacks.");
  }
}

export async function readProjectWithStacks(id: number): Promise<ProjectWithStacks | null> {
  try {
    const data = await sql` 
      SELECT 
      projects.*,
      jsonb_agg(
         stacks.id
      ) AS project_stacks 
      FROM projects
      INNER JOIN projects_stacks ON projects_stacks.project_id = projects.id
      INNER JOIN stacks ON projects_stacks.stack_id = stacks.id
      WHERE projects.id = ${id}
      GROUP BY projects.id
      ORDER BY projects.id ASC`;
    revalidatePath("/dashboard");
    if (data.rows.length === 0) {
      return null;
    }
    const project = data.rows[0] as ProjectWithStacks;
    return project;
  } catch (error) {
    console.error("Database Error: Failed to get project.", error);
    return null;
  }
}

export async function readStack(id: number): Promise<Stack | null> {
  try {
    const data = await sql`SELECT * FROM stacks WHERE id = ${id}`;
    revalidatePath("/dashboard");
    if (data.rows.length === 0) {
      return null;
    }
    const stack = data.rows[0] as Stack;
    return stack;
  } catch (error) {
    console.error("Database Error: Failed to get stack.", error);
    throw new Error("Failed to fetch Stack.");
  }
}
