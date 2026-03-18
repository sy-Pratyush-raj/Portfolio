import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"]
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Pratyush Raj | Developer Portfolio",
  description:
    "Professional developer portfolio for Pratyush Raj, built with Next.js, TypeScript, Tailwind CSS, and motion-led UI."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${manrope.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
