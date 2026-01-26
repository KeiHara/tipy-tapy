"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useCallback, useState } from "react";

interface GoogleSignInButtonProps {
  mode?: "login" | "signup";
}

export function GoogleSignInButton({ mode = "login" }: GoogleSignInButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = useCallback(async () => {
    setIsLoading(true);
    const supabase = createClient();

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      setIsLoading(false);
    }
  }, []);

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={handleGoogleSignIn}
      disabled={isLoading}
    >
      <IconBrandGoogle />
      {isLoading ? "Signing in..." : mode === "login" ? "Login with Google" : "Sign up with Google"}
    </Button>
  );
}
