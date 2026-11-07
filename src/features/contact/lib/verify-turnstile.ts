import { env } from "@/env/server";

type TurnstileResponse = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<boolean> {
  const secret = env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is missing.");
    return false;
  }

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    });

    if (remoteIp) {
      body.set("remoteip", remoteIp);
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return false;
    }

    const result = (await response.json()) as TurnstileResponse;

    if (!result.success) {
      console.error("Turnstile verification failed:", result["error-codes"]);
      return false;
    }

    const expectedHostname = env.TURNSTILE_EXPECTED_HOSTNAME;

    if (expectedHostname && result.hostname !== expectedHostname) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}
