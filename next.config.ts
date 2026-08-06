import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "7232",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
