import Link from "next/link";

import { getUser } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/logout-button";
import { Button } from "@/components/ui/button";

export async function AuthButton() {
  const user = await getUser();

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
