// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createClient } = require("next-sanity");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: "2025-02-06",
});

async function getLastPostsSitemap() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current
  }`;
  try {
    const data = await client.fetch(
      query,
      {},
      {
        next: { revalidate: 0 },
      }
    );
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
    return [];
  }
}

module.exports = {
  client,
  getLastPostsSitemap,
};
