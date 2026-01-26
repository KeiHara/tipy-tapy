"use client";

import { toast } from "@/components/ui/sonner";
import { createClient } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";

type LoginParams = {
  email: string;
  password: string;
};

export function useMutationLogin() {
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
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
