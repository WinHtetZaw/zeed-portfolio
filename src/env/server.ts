import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1),
    CONTACT_EMAIL: z.string().min(1),
    RESEND_FROM_EMAIL: z.string().min(1),
    UPSTASH_REDIS_REST_URL: z.url(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
    TURNSTILE_SECRET_KEY: z.string().min(1),
    TURNSTILE_EXPECTED_HOSTNAME: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
  // },
  // For Next.js >= 13.4.4, you can just reference process.env:
  experimental__runtimeEnv: process.env,
});
