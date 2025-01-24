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

export function formatDate(dateString: string, addDays = 0) {
  const utcDateString = dateString.replace(/\+00$/, "Z");
  const date = new Date(utcDateString);
  if (isNaN(date.getTime())) {
    console.error("Date invalide fournie:", dateString);
    return "Date invalide";
  }
  date.setDate(date.getDate() + addDays);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Motnhs are 0-indexed
  const year = date.getUTCFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
}
