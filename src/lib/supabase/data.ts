"use server";

import { createClient } from "@supabase/supabase-js";
import { Stack, ProjectWithStacks, UserCredentials, User } from "@/lib/supabase.type";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getUserCredentials(email: string): Promise<UserCredentials | null> {
  const { data, error } = await supabase.from("users").select("email, password").eq("email", email).single();

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Failed to fetch user credentials.");
  }

  return data;
}

export async function fetchUser(): Promise<User[]> {
  const { data, error } = await supabase
    .from("users")
    .select(
      "id, firstname, lastname, email, age, short_description, long_description, picture_url, github_link, linkedin_link"
    );

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Failed to fetch users.");
  }

  return data;
}

export async function fetchStacks(): Promise<Stack[]> {
  const { data, error } = await supabase.from("stacks").select("id, name, logo, stack_link");

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Failed to fetch the latest stacks.");
  }

  return data;
}

export async function browseProjectsWithStacks(): Promise<ProjectWithStacks[]> {
  const { data, error } = await supabase.from("projects").select(`
      id,
      title,
      description,
      description_en,
      client_name,
      preview_picture_url,
      link,
      github_repo,
      published,
      status,
      stacks(id, name, logo, stack_link)
    `);

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Failed to fetch Project with stacks.");
  }

  return data;
}

export async function readProjectWithStacks(id: number): Promise<ProjectWithStacks | null> {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      id,
      title,
      description,
      description_en,
      client_name,
      preview_picture_url,
      link,
      github_repo,
      published,
      status,
      stacks(id, name, logo, stack_link)
    `
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase Error: Failed to get project.", error);
    return null;
  }

  return data;
}

export async function readStack(id: number): Promise<Stack | null> {
  const { data, error } = await supabase.from("stacks").select("id, name, logo, stack_link").eq("id", id).single();

  if (error) {
    console.error("Supabase Error: Failed to get stack.", error);
    throw new Error("Failed to fetch Stack.");
  }

  return data;
}

export async function uploadFile(file: File, fileName: string): Promise<string> {
  const { data, error } = await supabase.storage.from("avatars").upload(fileName, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to upload file.");
  }

  console.log(data);

  return data.fullPath;
}

export async function deleteFile(url: string): Promise<void> {
  const { error } = await supabase.storage.from("avatars").remove([url]);

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Failed to delete file.");
  }
}
