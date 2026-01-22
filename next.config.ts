import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/prokr-84ca8.firebasestorage.app/**',
      },
      {
        protocol: 'https',
        hostname: 'prokr-84ca8.firebasestorage.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
