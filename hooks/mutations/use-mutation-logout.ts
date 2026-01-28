"use client";

import { toast } from "@/components/ui/sonner";
import { createClient } from "@/lib/supabase/client";
import { AUTH_USER_QUERY_KEY } from "@/hooks/queries/use-query-user";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useMutationLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUTH_USER_QUERY_KEY });
      queryClient.clear();
      toast.success("Logged out successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
