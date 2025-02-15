import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {},
  serverRuntimeConfig: {
    port: 3001, // Change to any other port
  },
  reactStrictMode: false, // Add this here
};

export default nextConfig;

// Also support CommonJS
module.exports = nextConfig;
