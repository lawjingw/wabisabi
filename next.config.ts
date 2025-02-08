import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmsbcphmvkaofadmdnyy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/products/**",
        search: "",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
