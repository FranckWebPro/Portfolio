"use server";

import { sql } from "@vercel/postgres";
import {
  User,
  Stack,
  ProjectWithStacks,
  UserCredentials,
  SecuredUserCredentials,
} from "./definitions";
const bcrypt = require("bcryptjs");

export async function getUserCredentials(
  email: string,
  password: string
): Promise<SecuredUserCredentials | null> {
  try {
    const data = await sql<UserCredentials>`
        SELECT email, password
        FROM users
        WHERE email = ${email}
      `;

    const user: UserCredentials = data.rows[0];

    if (user && (await bcrypt.compareSync(password, user.password))) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as SecuredUserCredentials;
    } else if (user && !bcrypt.compareSync(password, user.password)) {
      return null;
    } else {
      return null;
    }
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
    const data = await sql<Stack[]>`SELECT * FROM stacks`;
    return data.rows as unknown as Stack[];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest stacks.");
  }
}

// const ITEMS_PER_PAGE = 6;
export async function fetchProjectsWithStacks() {
  //   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

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
