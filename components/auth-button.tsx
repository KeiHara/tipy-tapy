"use client";

import { useQueryUser } from "@/hooks/queries";
import Link from "next/link";
import { LogoutButton } from "./logout-button";
import { Button } from "./ui/button";

export function AuthButton() {
  const { data: user, isLoading } = useQueryUser();

  if (isLoading) {
    return <div className="h-9 w-20 animate-pulse rounded bg-muted" />;
  }

  return user ? (
    <div className="flex items-center gap-4">
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant="outline">
        <Link href="/auth/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant="default">
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
