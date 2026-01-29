import type { Metadata } from "next";
import { AR_One_Sans, Abhaya_Libre, Fira_Code } from "next/font/google";
import { Suspense } from "react";

import { AuthButton } from "@/components/layout/auth-button";
import { Nav } from "@/components/layout/nav";
import { SidebarLayout } from "@/components/layout/sidenav";
import { LoginToast } from "../components/login-toast";
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
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${arOneSans.variable} ${abhayaLibre.variable} ${firaCode.variable} font-sans antialiased h-full flex flex-col`}
      >
        <Providers>
          <Suspense>
            <LoginToast />
          </Suspense>
          <Nav>
            <AuthButton />
          </Nav>
          <SidebarLayout>{children}</SidebarLayout>
        </Providers>
      </body>
    </html>
  );
}
