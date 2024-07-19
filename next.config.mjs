/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
    ],
  },
};

export default nextConfig;
