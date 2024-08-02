"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { CreateProject } from "./validate";
import { ProjectWithStacks } from "./definitions";

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
    published,
    status,
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

      console.log("project successfully added");
    }
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to send new project.");
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
    return { message: "Database Error: Failed to Delete project." };
  }
}

export async function togglePublication(id: number, published: boolean) {
  try {
    await sql`UPDATE projects SET published = ${!published} WHERE id = ${id}`;
    revalidatePath("/dashboard");
    revalidatePath("/");
    return console.log("Project updated");
  } catch (error) {
    return { message: "Database Error: Failed to Delete project." };
  }
}

export async function readProjectWithStacks(id: number): Promise<ProjectWithStacks | null> {
  try {
    const data = await sql<ProjectWithStacks[]>` 
    SELECT 
    projects.*,
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
    WHERE projects.id = ${id}
    GROUP BY projects.id
    ORDER BY projects.id ASC`;

    revalidatePath("/dashboard");

    const project = data.rows[0];
    console.log(project);

    return project;
  } catch (error) {
    console.error("Database Error: Failed to get project.", error);
    return null;
  }
}
