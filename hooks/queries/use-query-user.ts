"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";

export function useQueryUser() {
  const supabase = createClient();

  return useSuspenseQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    },
  });
}
