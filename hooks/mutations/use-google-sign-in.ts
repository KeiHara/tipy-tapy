"use client";

import { createClient } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/sonner";

export function useMutationSignInWithGoogle() {
  return useMutation({
    mutationFn: async () => {
      const supabase = createClient();
      const redirectTo = `${window.location.origin}/auth/callback`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
        },
      });

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      toast.success("Signed in with Google successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
