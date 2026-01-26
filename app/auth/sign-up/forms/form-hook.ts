"use client";

import {
  EmailField,
  PasswordField,
  RepeatPasswordField,
} from "@/app/auth/sign-up/forms/components";
import { fieldContext, formContext } from "@/app/auth/sign-up/forms/form-context";
import { createFormHook } from "@tanstack/react-form";

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    EmailField,
    PasswordField,
    RepeatPasswordField,
  },
  formComponents: {},
});
