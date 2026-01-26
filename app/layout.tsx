import type { Metadata } from "next";
import { AR_One_Sans, Abhaya_Libre, Fira_Code } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";

import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { Providers } from "./providers";

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
          <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl flex justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-md shadow-lg h-14">
            <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
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
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
