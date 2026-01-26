"use client";

import { useFieldContext } from "@/app/auth/login/forms/form-context";
import { LoginFormValues } from "@/app/auth/login/forms/schema";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function PasswordField() {
  const field = useFieldContext<LoginFormValues["password"]>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid}>
      <div className="flex items-center">
        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
        <Button variant="link" size="sm">
          <Link href="/auth/forgot-password">Forgot your password?</Link>
        </Button>
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
