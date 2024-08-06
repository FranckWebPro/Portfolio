import sanitize from "sanitize-filename";

export const formatFileName = (fileName: string): string => {
  const date = Date.now();

  const sanitzedFileName = sanitize(fileName);
  let newFileName: string;

  if (fileName.startsWith("assets")) {
    newFileName = `${date}-${sanitzedFileName.slice(7, -1)}`;
    return newFileName;
  } else {
    newFileName = `${date}-${sanitzedFileName}`;
    return newFileName;
  }
};

export async function uploadFileFromForm(file: File) {
    const uploadData = new FormData();
    uploadData.append("file", file);
    const response = await uploadFile(uploadData);
    return response;
}

export async function uploadFile(data: FormData) {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
  
    return response;
  }