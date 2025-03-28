import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogs.globalsalah.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*', // Adjust this path as needed
        destination: 'https://pro.ip-api.com/:path*', // External API URL
      },
    ];
  },
  
  async headers() {
    return [
      {
        source: '/api/proxy/:path*', // For your API proxy route
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all domains (adjust as needed)
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};



export default nextConfig;
