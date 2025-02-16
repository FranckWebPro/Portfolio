/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/**", // autorise toutes les ressources depuis ce domaine
      },
      {
        protocol: "https",
        hostname: "adware-technologies.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.drupal.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logowik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dailybrand.co.zw",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.junia.ai",
        port: "",
        pathname: "/**",
      },
      { protocol: "https", hostname: "cdn.sanity.io", port: "", pathname: "/**" },
      { protocol: "https", hostname: "placehold.co", port: "", pathname: "/**" },
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];
    return config;
  },
};

export default nextConfig;
