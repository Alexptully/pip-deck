import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_SINGLE_FILE: process.env.SINGLE_FILE ?? "" },
};

export default nextConfig;
