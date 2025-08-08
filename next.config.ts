import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

function getAllowedImageHosts(): RemotePattern[] {
  const envHosts = process.env.NEXT_PUBLIC_IMAGE_HOSTS?.split(",").map((h) =>
    h.trim()
  );
  const defaults = [
    "*.r2.dev",
    "*.cloudflarestorage.com",
  ];
  return (
    envHosts && envHosts.length > 0
      ? envHosts
      : [
          process.env.NEXT_PUBLIC_APP_URL?.replace(/^https?:\/\//, "") || "",
          ...defaults,
        ]
  )
    .filter((h): h is string => Boolean(h))
    .map((hostname) => ({ protocol: "https", hostname }));
}

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    remotePatterns: getAllowedImageHosts(),
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
