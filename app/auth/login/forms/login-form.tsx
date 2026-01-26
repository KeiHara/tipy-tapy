"use client";

import { useLoginForm } from "@/app/auth/login/forms/hooks";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { Link } from "@/components/ui/link";

export function LoginForm() {
  const { form } = useLoginForm();
  const isSubmitting = form.useStore((state) => state.isSubmitting);

  return (
    <Card className="flex flex-col gap-6">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => (e.preventDefault(), form.handleSubmit())}>
          <FieldGroup>
            <form.AppField name="email">{(field) => <field.EmailField />}</form.AppField>
            <form.AppField name="password">{(field) => <field.PasswordField />}</form.AppField>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
            <GoogleSignInButton mode="login" />
          </FieldGroup>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account? <Link href="/auth/sign-up">Sign up</Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
