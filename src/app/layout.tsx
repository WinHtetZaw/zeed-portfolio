import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zeed.dev — Frontend Developer",
    template: "%s | Zeed.dev",
  },
  description:
    "I'm Zeed, a frontend developer focused on React, Next.js, and building modern web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
