import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Keeps module/chunk resolution inside this project (avoids parent lockfile confusion)
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
