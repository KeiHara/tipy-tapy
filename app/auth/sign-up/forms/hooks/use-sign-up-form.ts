"use client";

import { useAppForm } from "@/app/auth/sign-up/forms/form-hook";
import { signUpSchema, type SignUpFormValues } from "@/app/auth/sign-up/forms/schema";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSignUpForm() {
  const router = useRouter();

  const onSubmit = useCallback(
    async ({ value }: { value: SignUpFormValues }) => {
      const supabase = createClient();

      const { error } = await supabase.auth.signUp({
        email: value.email,
        password: value.password,
        options: { emailRedirectTo: `${window.location.origin}/protected` },
      });

      if (error) {
        throw new Error(error.message);
      }

      router.push("/auth/sign-up-success");
    },
    [router]
  );

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validators: {
      onChange: signUpSchema,
    },
    onSubmit,
  });

  return { form };
}
