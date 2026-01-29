"use client";

import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";

export const AUTH_USER_QUERY_KEY = "auth-user";

export function useQueryUser() {
  const supabase = createClient();

  return useQuery({
    queryKey: [AUTH_USER_QUERY_KEY],
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    },
  });
}
