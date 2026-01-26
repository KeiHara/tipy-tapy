"use client";

import { useAppForm } from "@/app/auth/login/forms/form-hook";
import { loginSchema, type LoginFormValues } from "@/app/auth/login/forms/schema";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useLoginForm() {
  const router = useRouter();

  const onSubmit = useCallback(
    async ({ value }: { value: LoginFormValues }) => {
      const supabase = createClient();

      const { error } = await supabase.auth.signInWithPassword({
        email: value.email,
        password: value.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      router.push("/protected");
    },
    [router]
  );

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: loginSchema,
    },
    onSubmit,
  });

  return { form };
}
