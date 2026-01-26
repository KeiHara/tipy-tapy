"use client";

import { toast } from "@/components/ui/sonner";
import { userQueryKey } from "@/hooks/queries";
import { createClient } from "@/lib/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type LoginParams = {
  email: string;
  password: string;
};

export function useMutationLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: LoginParams) => {
      const supabase = createClient();

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [userQueryKey] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
