"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import { contactSchema } from "@/features/contact/schemas/contact-schema";
import { verifyTurnstileToken } from "@/features/contact/lib/verify-turnstile";
import { contactRateLimit, createRateLimitIdentifier } from "@/lib/rate-limit";
import { env } from "@/env/server";

export type ContactActionResult = {
  success: boolean;
  message: string;
};

export async function sendContactMessage(
  values: unknown,
): Promise<ContactActionResult> {
  const validation = contactSchema.safeParse(values);

  if (!validation.success) {
    return {
      success: false,
      message: "Please check your information and try again.",
    };
  }

  const { name, email, subject, message, website, turnstileToken } =
    validation.data;

  // Silently reject honeypot submissions.
  if (website) {
    return {
      success: true,
      message: "Your message has been received.",
    };
  }

  const apiKey = env.RESEND_API_KEY;
  const recipient = env.CONTACT_EMAIL;
  const sender = env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form email configuration is missing.");

    return {
      success: false,
      message: "Unable to send your message right now.",
    };
  }

  try {
    const requestHeaders = await headers();

    const forwardedFor = requestHeaders.get("x-forwarded-for");
    const realIp = requestHeaders.get("x-real-ip");

    const ip = forwardedFor?.split(",")[0]?.trim() || realIp;

    if (!ip) {
      return {
        success: false,
        message: "Unable to process your request. Please try again later.",
      };
    }

    // Rate limiting
    const identifier = createRateLimitIdentifier(ip);

    const { success: withinLimit } = await contactRateLimit.limit(identifier);

    if (!withinLimit) {
      return {
        success: false,
        message: "Too many messages. Please try again later.",
      };
    }

    // Verify Turnstile token
    const isHuman = await verifyTurnstileToken(turnstileToken, ip);

    if (!isHuman) {
      return {
        success: false,
        message: "Security verification failed. Please try again.",
      };
    }

    // Send email
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return {
        success: false,
        message: "Unable to send your message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Contact submission failed:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
