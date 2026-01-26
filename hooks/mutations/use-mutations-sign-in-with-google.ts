"use client";

import { toast } from "@/components/ui/sonner";
import { createClient } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";

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
      toast.success("Redirecting to Google...");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
