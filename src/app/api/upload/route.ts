import { formatFileName } from "@/lib/utils";
import { writeFile } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const formattedFileName = formatFileName(file.name);

  let path = join(process.cwd(), "public", "assets", formattedFileName);
  writeFile(path, buffer, (error) => {
    if (error) throw error;
  });

  path = join("/", "assets", formattedFileName);

  return NextResponse.json({ success: true, path: path });
}
