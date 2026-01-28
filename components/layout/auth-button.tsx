"use client";

import { Suspense } from "react";
import Link from "next/link";

import { useQueryUser } from "@/hooks/queries";
import { LogoutButton } from "@/components/logout-button";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

function AuthButtonContent() {
  const { data: user } = useQueryUser();

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

export function AuthButton() {
  return (
    <Suspense fallback={<Skeleton className="h-8 w-20" />}>
      <AuthButtonContent />
    </Suspense>
  );
}
