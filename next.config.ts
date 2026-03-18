import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Prevent corrupted fs cache issues on synced folders (e.g., OneDrive).
      config.cache = false;
    }

    return config;
  }
};

export default nextConfig;
