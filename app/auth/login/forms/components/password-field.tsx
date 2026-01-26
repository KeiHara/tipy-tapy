"use client";

import { useFieldContext } from "@/app/auth/login/forms/form-context";
import { LoginFormValues } from "@/app/auth/login/forms/schema";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";

export function PasswordField() {
  const field = useFieldContext<LoginFormValues["password"]>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid}>
      <div className="flex items-center gap-1">
        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
        <Link href="/auth/forgot-password">Forgot your password?</Link>
      </div>
      <Input
        id={field.name}
        name={field.name}
        type="password"
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
      />
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
}
