"use client";

import { Button } from "@/components/ui/button";
import { useMutationLogout } from "@/hooks/mutations";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  const { mutateAsync: logout } = useMutationLogout();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <Button onClick={handleLogout} size="sm">
      Logout
    </Button>
  );
}
