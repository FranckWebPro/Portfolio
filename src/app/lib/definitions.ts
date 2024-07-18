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
  linkedin_link: string | undefined;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  client_name: string | undefined;
  preview_picture_url: string;
  link: string | undefined;
  github_repo: string | undefined;
  published: boolean;
  status: "finished" | "working on it";
};

export type Stack = {
  id: number;
  name: string;
  logo: string;
  stack_link: string;
};

export interface ProjectWithStacks extends Project {
  project_stacks: Array<Stack>;
}

export type Project_Stack = {
  stack_id: number;
  project_id: number;
};
