import type { Metadata } from "next";
import { AR_One_Sans, Abhaya_Libre, Fira_Code } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";

import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Providers } from "./providers";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const arOneSans = AR_One_Sans({
  variable: "--font-sans",
  display: "swap",
  subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-serif",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${arOneSans.variable} ${abhayaLibre.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <Providers>
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
              <Button variant="ghost" size="sm">
                <Link href="/">Tipy Tapy</Link>
              </Button>
              <div className="flex items-center gap-4">
                <Suspense>
                  <AuthButton />
                </Suspense>
                <ThemeSwitcher />
              </div>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
