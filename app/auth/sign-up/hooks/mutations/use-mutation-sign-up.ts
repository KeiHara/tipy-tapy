"use client";

import { toast } from "@/components/ui/sonner";
import { createClient } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";

type SignUpParams = {
  email: string;
  password: string;
};

export function useMutationSignUp() {
  return useMutation({
    mutationFn: async ({ email, password }: SignUpParams) => {
      const supabase = createClient();

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/editor` },
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
