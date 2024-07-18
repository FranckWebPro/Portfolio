import { writeFile } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join("/", "tmp", file.name);
  await writeFile(path, buffer, (error) => {
    if (error) throw error;
    console.log("The file has been saved!");
  });
  console.log(`open ${path} to see the uploadedd file`);

  return NextResponse.json({ success: true });
}
