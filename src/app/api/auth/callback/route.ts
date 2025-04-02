import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get("code");
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.redirect(`${url}` + "/signin");
    }
  }

  return NextResponse.redirect(`${url}` + "/dashboard");
}
