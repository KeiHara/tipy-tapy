"use client";

import { Button } from "@/components/ui/button";
import { useMutationLogout } from "@/hooks/mutations";

export function LogoutButton() {
  const { mutate: logout } = useMutationLogout();

  return (
    <Button onClick={() => logout()} size="sm">
      Logout
    </Button>
  );
}
