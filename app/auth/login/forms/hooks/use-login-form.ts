"use client";

import { useAppForm } from "@/app/auth/login/forms/form-hook";
import { loginSchema, type LoginFormValues } from "@/app/auth/login/forms/schema";
import { useMutationLogin } from "@/app/auth/login/hooks/mutations";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

export function useLoginForm() {
  const router = useRouter();
  const { mutateAsync: login } = useMutationLogin();

  const onSubmit = useCallback(
    async ({ value }: { value: LoginFormValues }) => {
      await login({ email: value.email, password: value.password });
      router.push("/editor");
      toast.success("Logged in successfully");
    },
    [login, router]
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
