import { sql } from "@vercel/postgres";
import { User, Stack, ProjectWithStacks } from "./definitions";
// import { formatCurrency } from "./utils";

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

export async function fetchStacks() {
  try {
    const data = await sql<Stack[]>`SELECT * FROM stacks`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest stacks.");
  }
}

// const ITEMS_PER_PAGE = 6;
export async function fetchProjectsWithStacks() {
  //   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<ProjectWithStacks>`
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

    return invoices.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Project with stacks.");
  }
}

export async function addProject() {
  try {
    const data = await sql`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to send new project.");
  }
}
