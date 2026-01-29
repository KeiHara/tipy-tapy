"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useQueryUser } from "@/hooks/queries";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";

export function Nav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: user, isLoading } = useQueryUser();

  // Hide nav if not on home page or if user is logged in (sidebar replaces it)
  if (pathname !== "/" || (user && !isLoading)) {
    return null;
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl flex justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-md shadow-lg h-14">
      <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
        <Button variant="ghost" size="sm">
          <Link href="/">Tipy Tapy</Link>
        </Button>
        <div className="flex items-center gap-4">
          {children}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
