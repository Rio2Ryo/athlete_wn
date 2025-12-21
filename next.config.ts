import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/athlete",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
