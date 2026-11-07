// "use server";

// import { Resend } from "resend";

// import { contactSchema } from "@/features/contact/schemas/contact-schema";
// import { fail, ok } from "@/utils/result";

// export type ContactActionResult = {
//   success: boolean;
//   message: string;
// };

// export async function sendContactMessage(values: unknown) {
//   // Validate on the server. Never trust client-side validation.
//   const validation = contactSchema.safeParse(values);

//   if (!validation.success) {
//     return fail({
//       reason: "INVALID_INPUT",
//       details: validation.error,
//     });
//   }

//   const { name, email, subject, message, website } = validation.data;

//   // Honeypot: silently reject submissions that fill this field.
//   if (website) {
//     return fail({
//       reason: "INVALID_INPUT",
//       details: "Invalid submission.",
//     });
//   }

//   const apiKey = process.env.RESEND_API_KEY;
//   const recipient = process.env.CONTACT_EMAIL;
//   const sender = process.env.RESEND_FROM_EMAIL;

//   if (!apiKey || !recipient || !sender) {
//     console.error("Contact form environment variables are missing.");

//     return fail({ reason: "SERVER_ERROR" });
//   }

//   try {
//     const resend = new Resend(apiKey);

//     const { error } = await resend.emails.send({
//       from: sender,
//       to: recipient,
//       replyTo: email,
//       subject: `Portfolio contact: ${subject}`,
//       text: [
//         `Name: ${name}`,
//         `Email: ${email}`,
//         `Subject: ${subject}`,
//         "",
//         "Message:",
//         message,
//       ].join("\n"),
//     });

//     if (error) {
//       console.error("Resend error:", error);

//       return fail({ reason: "SERVER_ERROR" });
//     }

//     return ok({
//       success: true,
//       message: "Your message has been sent successfully!",
//     });
//   } catch (error) {
//     console.error("Contact form submission failed:", error);

//     return fail({ reason: "UNEXPECTED" });
//   }
// }
