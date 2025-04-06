import { createClient } from "@/lib/supabase/client";

export async function getArticles() {
  const supabase = createClient();
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
    throw error;
  }
  return data;
}
