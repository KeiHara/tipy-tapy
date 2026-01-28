"use client";

import { toast } from "@/components/ui/sonner";
import { createClient } from "@/lib/supabase/client";

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
      queryClient.clear();
      toast.success("Logged out successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
