"use client";

import { useAppForm } from "@/app/auth/forgot-password/forms/form-hook";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "@/app/auth/forgot-password/forms/schema";
import { createClient } from "@/lib/supabase/client";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export function useForgotPasswordForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = useCallback(async ({ value }: { value: ForgotPasswordFormValues }) => {
    const supabase = createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(value.email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    setIsSuccess(true);
  }, []);

  const form = useAppForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onChange: forgotPasswordSchema,
    },
    onSubmit,
  });

  return { form, isSuccess };
}
