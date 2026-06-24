import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/come-learn-with-me",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/come-learn-with-me/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
