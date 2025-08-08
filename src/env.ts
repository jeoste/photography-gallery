import { z } from "zod";

const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().min(16),
  BETTER_AUTH_URL: z.string().url(),

  CLOUDFLARE_R2_ENDPOINT: z.string().url(),
  CLOUDFLARE_R2_ACCESS_KEY_ID: z.string().min(1),
  CLOUDFLARE_R2_SECRET_ACCESS_KEY: z.string().min(1),
  CLOUDFLARE_R2_BUCKET_NAME: z.string().min(1),
  CLOUDFLARE_R2_PUBLIC_URL: z.string().url(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: z.string().min(1),
  NEXT_PUBLIC_MAPBOX_STYLE_LIGHT: z.string().optional(),
  NEXT_PUBLIC_MAPBOX_STYLE_DARK: z.string().optional(),
  NEXT_PUBLIC_IMAGE_HOSTS: z.string().optional(),
});

function parseEnv<T extends z.ZodTypeAny>(schema: T, data: Record<string, string | undefined>) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errorMessage = result.error.issues
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join("; ");
    throw new Error(`Invalid environment variables: ${errorMessage}`);
  }
  return result.data as z.infer<T>;
}

export const env = {
  server: parseEnv(serverSchema, process.env as Record<string, string | undefined>),
  client: parseEnv(clientSchema, process.env as Record<string, string | undefined>),
};


