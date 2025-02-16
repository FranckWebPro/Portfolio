import { defineQuery, createClient, defineLive } from "next-sanity";
import { BlogPost, Categories } from "../types/sanity.types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: "2025-02-06",
});

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.SANITY_TOKEN,
    apiVersion: "2025-02-06",
  }),
});

class SanityService {
  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    const { data } = await sanityFetch({
      query: defineQuery(`*[_type == "post" && categories == "${category}"] {
            _id, title, slug, author, body, publishedAt, "mainImage": mainImage.asset->url}`),
    });
    return data;
  }

  async getPostCategories(): Promise<Categories[]> {
    const { data } = await sanityFetch({
      query: defineQuery(`*[_type == "categories"] {
            _id, title, description}`),
    });
    return data;
  }

  async getCategory(category: string): Promise<Categories> {
    const { data } = await sanityFetch({
      query: defineQuery(`*[_type == "categories" && title == "${category}"] {
            _id, title, slug, description}`),
    });
    return data;
  }

  async getLastPosts(): Promise<BlogPost[]> {
    const { data } = await sanityFetch({
      query: defineQuery(`*[_type == "post"] | order(publishedAt desc)[0...6] {
            _id, title, slug, author, body, publishedAt, "mainImage": mainImage.asset->url}`),
    });
    return data;
  }

  async getPostBySlug(slug: string): Promise<BlogPost> {
    const { data } = await sanityFetch({
      query: defineQuery(`*[_type == "post" && slug.current == "${slug}"] {
            _id, title, slug, author, body, publishedAt, "mainImage": mainImage.asset->url}`),
    });
    return data[0];
  }
}

export const sanityService = new SanityService();
