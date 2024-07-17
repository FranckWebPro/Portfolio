export type User = {
  id: number;
  firstname: string;
  lastname: string | undefined;
  email: string;
  age: number | undefined;
  short_description: string | undefined;
  long_description: string | undefined;
  picture_url: string | undefined;
  github_link: string;
  linkedin_url: string | undefined;
  password: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  client_name: string | undefined;
  preview_picture_url: string;
  link: string | undefined;
  github_repo: string | undefined;
  date_created: Date;
  published: boolean;
  status: "finished" | "working on it";
};

export type Stack = {
  id: number;
  name: string;
  logo: number;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type ProjectRaw = Omit<Project, "amount"> & {
  amount: number;
};
