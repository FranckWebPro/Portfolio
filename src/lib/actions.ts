"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { CreateProject } from "./validate";
import { promises } from "fs";

export async function addProject(formData: FormData) {
  const projectData = Object.fromEntries(formData.entries());

  const data = CreateProject.parse({
    ...projectData,
    published: projectData.published === "on" ? true : false,
    stacks_id: formData.getAll("stacks_id"),
  });

  const {
    title,
    description,
    client_name,
    preview_picture_url,
    link,
    github_repo,
    status,
    published,
    stacks_id,
  } = data;

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
    throw new Error(`Failed to ad project. Error details: ${error}`);
  }
  revalidatePath("/dashboard");
}

export async function deleteProject(id: number) {
  try {
    const imgPath = await sql`SELECT preview_picture_url FROM projects WHERE id = ${id}`;

    if (imgPath.rows.length > 0) {
      await promises.unlink(`public/${imgPath.rows[0].preview_picture_url}`);
    }
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
    return console.log("Project updated");
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

  const {
    title,
    description,
    client_name,
    preview_picture_url,
    link,
    github_repo,
    status,
    published,
    stacks_id,
  } = data;

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
    throw new Error(`Failed to delete project with ID ${id}. Error details: ${error}`);
  }

  revalidatePath("/dashboard");
}
