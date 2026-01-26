"use client";

import { EmailField } from "@/app/auth/forgot-password/forms/components";
import { fieldContext, formContext } from "@/app/auth/forgot-password/forms/form-context";
import { createFormHook } from "@tanstack/react-form";

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    EmailField,
  },
  formComponents: {},
});
