import { PortableTextBlock } from "@portabletext/types";

export type Categories = {
  _id: string;
  title: string;
  description: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  author: Author;
  mainImage: string;
  publishedAt: string;
  body: PortableTextBlock[];
};

export type Author = {
  _id: string;
  name: string;
  bio: string;
  image: string;
};

export interface BlockContentSchema {
  title: "Block Content";
  name: "blockContent";
  type: "array";
  of: Array<BlockContentItem>;
}

export type BlockContentItem = Block | Image;

export interface Block {
  title: "Block";
  type: "block";
  styles: Array<{
    title: "Normal" | "H1" | "H2" | "H3" | "H4" | "Quote";
    value: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  }>;
  lists: Array<{
    title: "Bullet";
    value: "bullet";
  }>;
  marks: {
    decorators: Array<{
      title: "Strong" | "Emphasis";
      value: "strong" | "em";
    }>;
    annotations: Array<LinkAnnotation>;
  };
}

export interface LinkAnnotation {
  title: "URL";
  name: "link";
  type: "object";
  fields: Array<{
    title: "URL";
    name: "href";
    type: "url";
  }>;
}

export interface Image {
  type: "image";
  options: {
    hotspot: boolean;
  };
}
