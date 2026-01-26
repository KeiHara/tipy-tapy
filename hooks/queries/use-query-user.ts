"use client";

import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const userQueryKey = ["user"] as const;

export function useQueryUser() {
  const supabase = createClient();

  return useQuery({
    queryKey: userQueryKey,
    queryFn: async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      return data.user;
    },
  });
}
