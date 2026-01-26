"use client";

import { useAppForm } from "@/app/auth/sign-up/forms/form-hook";
import { signUpSchema, type SignUpFormValues } from "@/app/auth/sign-up/forms/schema";
import { useMutationSignUp } from "@/app/auth/sign-up/hooks/mutations";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSignUpForm() {
  const router = useRouter();
  const { mutateAsync: signUp } = useMutationSignUp();

  const onSubmit = useCallback(
    async ({ value }: { value: SignUpFormValues }) => {
      await signUp({ email: value.email, password: value.password });
      router.push("/auth/sign-up-success");
    },
    [signUp, router]
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
