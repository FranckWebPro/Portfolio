// import bcrypt from "bcrypt";
// import { db } from "@vercel/postgres";
// import { users, projects, stacks, projectsStacks } from "./placeholder-data";

// const client = await db.connect();

// async function dropTables() {
//   try {
//     await client.sql`DROP TABLE IF EXISTS projects_stacks CASCADE`;
//     await client.sql`DROP TABLE IF EXISTS projects CASCADE`;
//     await client.sql`DROP TABLE IF EXISTS stacks CASCADE`;
//     await client.sql`DROP TABLE IF EXISTS users CASCADE`;
//     console.log("Tables dropped successfully.");
//   } catch (error) {
//     console.error("Error dropping tables:", error);
//   }
// }

// async function seedUsers() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id SERIAL PRIMARY KEY,
//       firstname VARCHAR(255) NOT NULL,
//       lastname VARCHAR(255) NULL,
//       email VARCHAR(255) NOT NULL UNIQUE,
//       age INT NULL,
//       short_description VARCHAR(100) NULL,
//       long_description TEXT NULL,
//       picture_url VARCHAR(255) NULL,
//       github_link VARCHAR(255) NULL,
//       linkedin_link VARCHAR(255) NULL,
//       password TEXT NOT NULL
//     );
//   `;
//   console.log("Users table created.");

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (firstname, lastname, email, age, short_description, long_description, picture_url, github_link, linkedin_link, password)
//         VALUES (${user.firstname}, ${user.lastname},${user.email}, ${user.age}, ${user.short_description}, ${user.long_description}, ${user.picture_url},${user.github_link}, ${user.linkedin_link}, ${hashedPassword})
//         ON CONFLICT (email) DO NOTHING;
//       `;
//     })
//   );

//   return insertedUsers;
// }

// async function seedStacks() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS stacks (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL UNIQUE,
//         logo VARCHAR(255) NOT NULL,
//         stack_link VARCHAR(255) NOT NULL
//     );
//   `;
//   console.log("stack table created.");

//   const insertedStacks = await Promise.all(
//     stacks.map(async (stack) => {
//       const result = await client.sql`
//           INSERT INTO stacks (name, logo, stack_link)
//           VALUES (${stack.name}, ${stack.logo}, ${stack.stack_link})
//           ON CONFLICT (name) DO NOTHING;
//         `;
//       console.log(`Inserted stack: ${stack.name}`);
//       return result;
//     })
//   );
//   console.log("Stacks inserted:", insertedStacks);

//   return insertedStacks;
// }

// async function seedProjects() {
//   console.log("Creating projects table...");

//   await client.sql`
//   CREATE TABLE IF NOT EXISTS projects (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL UNIQUE,
//     description TEXT NULL,
//     client_name VARCHAR(255) NULL,
//     preview_picture_url VARCHAR(255) NULL,
//     link VARCHAR(255) NULL,
//     github_repo VARCHAR(255) NULL,
//     published BOOLEAN NOT NULL,
//     status VARCHAR(255) NOT NULL
// );
//   `;
//   console.log("project table created.");
//   const insertedProjects = await Promise.all(
//     projects.map(
//       async (project) => client.sql`
//       INSERT INTO projects (title, description, client_name, preview_picture_url, link, github_repo, published, status)
//       VALUES (${project.title}, ${project.description}, ${project.client_name}, ${project.preview_picture_url}, ${project.link}, ${project.github_repo}, ${project.published}, ${project.status})
//       ON CONFLICT (title) DO NOTHING;
//     `
//     )
//   );

//   return insertedProjects;
// }

// async function seedProjectsStacks() {
//   await client.sql`
//       CREATE TABLE IF NOT EXISTS projects_stacks (
//         stack_id INT NOT NULL,
//         project_id INT NOT NULL,
//         PRIMARY KEY (stack_id, project_id),
//         FOREIGN KEY (stack_id) REFERENCES stacks(id),
//         FOREIGN KEY (project_id) REFERENCES projects(id)
//       );
//     `;
//   console.log("projectStack table created.");
//   const insertedProjectsStacks = await Promise.all(
//     projectsStacks.map(
//       async (projectStack) => client.sql`
//           INSERT INTO projects_stacks (stack_id, project_id)
//           VALUES (${projectStack.stack_id}, ${projectStack.project_id})
//           ON CONFLICT (stack_id, project_id) DO NOTHING;
//         `
//     )
//   );

//   return insertedProjectsStacks;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await dropTables();
//     await seedUsers();
//     await seedStacks();
//     await seedProjects();
//     await seedProjectsStacks();
//     await client.sql`COMMIT`;
//     return Response.json({ message: "Database seeded successfully" });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
