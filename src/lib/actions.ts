"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { CreateProject, CreateStack } from "./validate";

export async function addProject(formData: FormData) {
  const projectData = Object.fromEntries(formData.entries());
  const data = CreateProject.parse({
    ...projectData,
    published: projectData.published === "on" ? true : false,
    stacks_id: formData.getAll("stacks_id"),
  });
  const { title, description, client_name, preview_picture_url, link, github_repo, status, published, stacks_id } =
    data;
  try {
    const insertId = await sql`
        INSERT INTO projects (title, description, client_name, preview_picture_url, link, github_repo, published, status) 
        VALUES (${title}, ${description}, ${client_name}, ${preview_picture_url}, ${link}, ${github_repo}, ${published}, ${status})
        RETURNING id
      `;
    const projectId = insertId.rows[0].id;
    for (const stackId of stacks_id) {
      await sql`
          INSERT INTO projects_stacks (project_id, stack_id)
          VALUES(${projectId}, ${stackId})
        `;
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to add project. Error details: ${error}`);
  }
  revalidatePath("/dashboard");
}

export async function deleteProject(id: number) {
  try {
    await sql`DELETE FROM projects_stacks WHERE project_id = ${id}`;
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath("/dashboard");
    revalidatePath("/");
    return { message: "Deleted project." };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to delete project with ID ${id}. Error details: ${error}`);
  }
}

export async function togglePublication(id: number, published: boolean) {
  try {
    await sql`UPDATE projects SET published = ${!published} WHERE id = ${id}`;
    revalidatePath("/dashboard");
    revalidatePath("/");
  } catch (error) {
    throw new Error(`Failed to update project with ID ${id}. Error details: ${error}`);
  }
}

export async function editProject(id: number, formData: FormData) {
  const projectData = Object.fromEntries(formData.entries());
  const data = CreateProject.parse({
    ...projectData,
    published: projectData.published === "on" ? true : false,
    stacks_id: formData.getAll("stacks_id"),
  });
  const { title, description, client_name, preview_picture_url, link, github_repo, status, published, stacks_id } =
    data;
  try {
    await sql`
          UPDATE projects 
          SET title = ${title}, 
          description = ${description}, 
          client_name = ${client_name}, 
          preview_picture_url = ${preview_picture_url}, 
          link = ${link}, 
          github_repo = ${github_repo}, 
          published = ${published}, 
          status = ${status}
          WHERE id = ${id}
          RETURNING id
        `;
    await sql`
            DELETE FROM projects_stacks WHERE project_id = ${id}
          `;
    for (const stackId of stacks_id) {
      await sql`
            INSERT INTO projects_stacks (project_id, stack_id)
            VALUES(${id}, ${stackId})
          `;
    }
  } catch (error) {
    throw new Error(`Failed to edit project with ID ${id}. Error details: ${error}`);
  }
  revalidatePath("/dashboard");
}

export async function addStack(formData: FormData) {
  const stackData = Object.fromEntries(formData.entries());
  const data = CreateStack.parse({
    ...stackData,
  });
  const { name, logo, stack_link } = data;
  try {
    await sql`
          INSERT INTO stacks (name, logo, stack_link) 
          VALUES (${name}, ${logo}, ${stack_link})
        `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to add stack. Error details: ${error}`);
  }
  revalidatePath("/dashboard");
}

export async function editStack(id: number, formData: FormData) {
  const stackData = Object.fromEntries(formData.entries());
  const data = CreateStack.parse({
    ...stackData,
  });
  const { name, logo, stack_link } = data;
  try {
    await sql`
            UPDATE stacks 
            SET name = ${name}, 
            logo = ${logo}, 
            stack_link = ${stack_link}
            WHERE id = ${id}
          `;
  } catch (error) {
    throw new Error(`Failed to edit stack with ID ${id}. Error details: ${error}`);
  }
  revalidatePath("/dashboard");
}

export async function deleteStack(id: number) {
  try {
    await sql`DELETE FROM stacks WHERE id = ${id}`;
    revalidatePath("/dashboard");
    revalidatePath("/");
    return { message: "Stack deleted." };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to delete stack with ID ${id}. Error details: ${error}`);
  }
}
