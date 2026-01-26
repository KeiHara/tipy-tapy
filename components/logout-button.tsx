"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

export function LogoutButton() {
  const router = useRouter();

  const logout = useCallback(async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    toast.success("Logged out successfully");
  }, [router]);

  return (
    <Button onClick={logout} size="sm">
      Logout
    </Button>
  );
}
