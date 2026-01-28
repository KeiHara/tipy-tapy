"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function LoginToast() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("logged_in") === "true") {
      toast.success("Logged in successfully!");

      // Remove the query param from URL
      const url = new URL(window.location.href);
      url.searchParams.delete("logged_in");
      router.replace(url.pathname, { scroll: false });
    }
  }, [searchParams, router]);

  return null;
}
