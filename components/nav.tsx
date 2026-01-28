"use client";

import type { User } from "@supabase/supabase-js";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";

const AUTH_ROUTES = ["/auth/login", "/auth/sign-up", "/auth/forgot-password"];

interface NavProps {
  user: User | null;
}

export function Nav({ user }: NavProps) {
  const pathname = usePathname();

  if (AUTH_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl flex justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-md shadow-lg h-14">
      <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
        <Button variant="ghost" size="sm">
          <Link href="/">Tipy Tapy</Link>
        </Button>
        <div className="flex items-center gap-4">
          <AuthButton user={user} />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
