import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { env } from "@/env/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "WinHtetZaw | Fullstack Developer",
    template: "%s | WinHtetZaw",
  },

  description:
    "I'm WinHtetZaw, a fullstack developer focused on React, Next.js, and building modern web applications.",

  applicationName: "WinHtetZaw.dev",

  authors: [{ name: "WinHtetZaw" }],

  creator: "WinHtetZaw",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "WinHtetZaw.dev",
    title: "WinHtetZaw | Fullstack Developer",
    description:
      "Explore my projects, development journey, and experience building modern web applications.",
  },

  twitter: {
    card: "summary_large_image",
    title: "WinHtetZaw | Fullstack Developer",
    description:
      "Fullstack developer focused on React, Next.js, and modern web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Win Htet Zaw",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Development",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
