import { S3Client } from "@aws-sdk/client-s3";
import { env } from "@/env";

// Initialize S3 client with Cloudflare R2 configuration
export const s3Client = new S3Client({
  region: "auto",
  endpoint: env.server.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: env.server.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: env.server.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  },
  // R2 fonctionne sans path-style dans la majorité des cas, ajustable si besoin
  forcePathStyle: false,
});


