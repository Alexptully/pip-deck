import type { NextConfig } from "next";

/** Set PAGES_BASE_PATH (for example "/pip-deck") when the deck is served from a GitHub Pages project site. */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: {
    NEXT_PUBLIC_SINGLE_FILE: process.env.SINGLE_FILE ?? "",
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
