"use client";

import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const userQueryKey = "user";

export function useQueryUser() {
  const supabase = createClient();

  return useQuery({
    queryKey: [userQueryKey],
    queryFn: async () => {
      const { data } = await supabase.auth.getUser();
      return data.user ?? null;
    },
  });
}
