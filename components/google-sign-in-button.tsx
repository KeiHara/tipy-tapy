"use client";

import { Button } from "@/components/ui/button";
import { useMutationSignInWithGoogle } from "@/hooks/mutations";
import { IconBrandGoogle } from "@tabler/icons-react";

interface GoogleSignInButtonProps {
  mode?: "login" | "signup";
}

export function GoogleSignInButton({ mode = "login" }: GoogleSignInButtonProps) {
  const { mutate: signInWithGoogle, isPending } = useMutationSignInWithGoogle();

  const handleGoogleSignIn = () => {
    signInWithGoogle(undefined, {
      onError: (error) => {
        console.error("Google sign-in error:", error);
      },
    });
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={handleGoogleSignIn}
      disabled={isPending}
    >
      <IconBrandGoogle />
      {isPending ? "Signing in..." : mode === "login" ? "Login with Google" : "Sign up with Google"}
    </Button>
  );
}
