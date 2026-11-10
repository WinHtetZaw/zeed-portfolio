// export const socialLinks = [
//   {
//     label: "Email",
//     href: "mailto:winhtet1279@gmail.com",
//   },
//   {
//     label: "GitHub",
//     href: "https://github.com/WinHtetZaw/",
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/win-htet-zaw-480359354/",
//   },
// ];

export const socialLinks = {
  email: {
    label: "Email",
    href: "mailto:winhtet1279@gmail.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/WinHtetZaw/",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/win-htet-zaw-480359354/",
  },
} as const;

export type socialName = keyof typeof socialLinks;
