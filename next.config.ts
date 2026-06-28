import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No `output: "standalone"` — that mode is for Docker/Node self-hosted
  // deployments and breaks Vercel/Netlify's serverless adapters.
  // Vercel auto-detects Next.js and handles output itself.
  reactStrictMode: true,
  typescript: {
    // Don't ignore type errors — surface them at build time so platforms
    // can report them clearly instead of failing silently
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
