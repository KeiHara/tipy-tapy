"use client";

import { EmailField, PasswordField } from "@/app/auth/login/forms/components";
import { fieldContext, formContext } from "@/app/auth/login/forms/form-context";
import { createFormHook } from "@tanstack/react-form";

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    EmailField,
    PasswordField,
  },
  formComponents: {},
});
