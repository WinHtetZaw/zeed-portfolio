import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name at least 2 characters long.")
    .max(80, "Please enter your name less than 80 characters long."),

  email: z.email().max(254),

  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject at least 3 characters long.")
    .max(120, "Please enter a subject less than 120 characters long."),

  message: z
    .string()
    .trim()
    .min(10, "Please enter a message at least 10 characters long.")
    .max(3000, "Please enter a message less than 3000 characters long."),

  website: z.string().max(0).optional(),

  turnstileToken: z.string().min(1, "Please complete the security check."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
