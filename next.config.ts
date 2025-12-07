import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "tse2.mm.bing.net" },
      { protocol: "https", hostname: "tse3.mm.bing.net" },
      { protocol: "https", hostname: "www.gossipherald.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      // THÊM DÒNG NÀY
      { protocol: "https", hostname: "images.hdqwalls.com" },
    ],
  },
};

export default nextConfig;
