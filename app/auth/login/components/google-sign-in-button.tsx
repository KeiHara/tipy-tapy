"use client";

import { GoogleIcon } from "./icons/google";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

interface GoogleSignInButtonProps {
  onError?: (error: string) => void;
}

export function GoogleSignInButton({ onError }: GoogleSignInButtonProps) {
  const handleGoogleLogin = async () => {
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error && onError) {
      onError(error.message);
    }
  };

  return (
    <Button type="button" variant="outline" className="w-full" onClick={handleGoogleLogin}>
      <GoogleIcon />
      Continue with Google
    </Button>
  );
}
