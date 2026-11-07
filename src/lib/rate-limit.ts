import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { createHash } from "node:crypto";

const redis = Redis.fromEnv();

export const contactRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "portfolio:contact",
});

export function createRateLimitIdentifier(ip: string) {
  return createHash("sha256").update(ip).digest("hex");
}
