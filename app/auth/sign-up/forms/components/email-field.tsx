"use client";

import { useFieldContext } from "@/app/auth/sign-up/forms/form-context";
import { SignUpFormValues } from "@/app/auth/sign-up/forms/schema";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function EmailField() {
  const field = useFieldContext<SignUpFormValues["email"]>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input
        id={field.name}
        name={field.name}
        type="email"
        placeholder="m@example.com"
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
      />
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
}
