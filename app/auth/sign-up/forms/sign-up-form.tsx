"use client";

import { useSignUpForm } from "@/app/auth/sign-up/forms/hooks";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { Link } from "@/components/ui/link";

export function SignUpForm() {
  const { form } = useSignUpForm();

  return (
    <Card className="flex flex-col gap-6">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => (e.preventDefault(), form.handleSubmit())}>
          <FieldGroup>
            <form.AppField name="email">{(field) => <field.EmailField />}</form.AppField>
            <form.AppField name="password">{(field) => <field.PasswordField />}</form.AppField>
            <form.AppField name="repeatPassword">
              {(field) => <field.RepeatPasswordField />}
            </form.AppField>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
            <GoogleSignInButton mode="signup" />
          </FieldGroup>
          <div className="mt-4 text-center text-sm">
            Already have an account? <Link href="/auth/login">Login</Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
