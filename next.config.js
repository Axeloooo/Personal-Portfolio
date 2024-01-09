/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // images
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
