import { getArticles } from "./src/lib/supabase/sitemapData";

module.exports = {
  // REQUIRED: add your own domain name here (e.g. https://shipfa.st),
  siteUrl: process.env.SITE_URL || "https://www.franckwebpro.com/",
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*", "/apple-icon.*", "/signin", "/api/*", "/dashboard"],
  additionalPaths: async () => {
    try {
      const articles = await getArticles();

      const articlePaths = articles.map((article) => `/blog/${article.slug}`);
      const allPaths = [...articlePaths, '/en'];

      return allPaths.map((path) => ({
        loc: path,
      }));
    } catch (error) {
      console.error("Error fetching dynamic paths for sitemap:", error);
      return [];
    }
  },
};
