import sanitize from "sanitize-filename";

export const formatFileName = (fileName: string): string => {
  const date = Date.now();

  const sanitzedFileName = sanitize(fileName);
  let newFileName: string;

  if (fileName.startsWith("assets")) {
    return (newFileName = `${date}-${sanitzedFileName.slice(7, -1)}`);
  } else {
    return (newFileName = `${date}-${sanitzedFileName}`);
  }
};

export async function uploadFile(data: FormData) {
  const response = await fetch("/api/upload", {
    method: "POST",
    body: data,
  });

  return response;
}
