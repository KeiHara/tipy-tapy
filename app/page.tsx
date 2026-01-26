import Link from "next/link";
import { Suspense } from "react";

import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { H1, P } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <Button variant="link" size="sm">
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

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <H1 className="mb-4">Welcome to Tipy Tapy</H1>
        <P className="text-muted-foreground text-center max-w-md">
          Get started by editing this page or sign in to access protected content.
        </P>
      </div>
    </main>
  );
}
