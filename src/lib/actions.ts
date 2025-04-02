"use server";

import { revalidatePath } from "next/cache";
import { CreateProject, CreateStack } from "./validate";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

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
    const { data: insertData, error: insertError } = await supabase
      .from("projects")
      .insert({
        title,
        description,
        client_name,
        preview_picture_url,
        link,
        github_repo,
        published,
        status,
      })
      .select("id");

    if (insertError) {
      throw new Error(insertError.message);
    }

    const projectId = insertData[0].id;
    for (const stackId of stacks_id) {
      const { error: stackError } = await supabase
        .from("projects_stacks")
        .insert({ project_id: projectId, stack_id: stackId });

      if (stackError) {
        throw new Error(stackError.message);
      }
    }
  } catch (error) {
    console.error("Supabase Error:", error);
    throw new Error(`Failed to add project. Error details: ${error}`);
  }
  revalidatePath("/dashboard");
}

export async function deleteProject(id: number) {
  try {
    const { error: stackError } = await supabase.from("projects_stacks").delete().eq("project_id", id);

    if (stackError) {
      throw new Error(stackError.message);
    }

    const { error: projectError } = await supabase.from("projects").delete().eq("id", id);

    if (projectError) {
      throw new Error(projectError.message);
    }

    revalidatePath("/");
    return { message: "Deleted project." };
  } catch (error) {
    console.error("Supabase Error:", error);
    throw new Error(`Failed to delete project with ID ${id}. Error details: ${error}`);
  }
}

export async function togglePublication(id: number, published: boolean) {
  try {
    const { error } = await supabase.from("projects").update({ published: !published }).eq("id", id);

    if (error) throw error;

    revalidatePath("/");
  } catch (error) {
    console.error("Supabase Error:", error);
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
    const { error: updateError } = await supabase
      .from("projects")
      .update({
        title,
        description,
        client_name,
        preview_picture_url,
        link,
        github_repo,
        published,
        status,
      })
      .eq("id", id);

    if (updateError) throw updateError;

    const { error: deleteError } = await supabase.from("projects_stacks").delete().eq("project_id", id);

    if (deleteError) throw deleteError;

    for (const stackId of stacks_id) {
      const { error: insertError } = await supabase
        .from("projects_stacks")
        .insert({ project_id: id, stack_id: stackId });

      if (insertError) {
        throw new Error(insertError.message);
      }
    }
  } catch (error) {
    console.error("Supabase Error:", error);
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
    const { error } = await supabase.from("stacks").insert({ name, logo, stack_link });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Supabase Error:", error);
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
    const { error } = await supabase.from("stacks").update({ name, logo, stack_link }).eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Supabase Error:", error);
    throw new Error(`Failed to edit stack with ID ${id}. Error details: ${error}`);
  }
  revalidatePath("/dashboard");
}

export async function deleteStack(id: number) {
  try {
    const { error } = await supabase.from("stacks").delete().eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/");
    return { message: "Stack deleted." };
  } catch (error) {
    console.error("Supabase Error:", error);
    throw new Error(`Failed to delete stack with ID ${id}. Error details: ${error}`);
  }
}
