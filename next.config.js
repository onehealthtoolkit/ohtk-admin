/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  publicRuntimeConfig: {
    serverDomain: process.env.serverDomain || "opensur.test",
  },
};

module.exports = nextConfig;
