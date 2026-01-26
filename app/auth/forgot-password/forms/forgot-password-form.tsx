"use client";

import { useForgotPasswordForm } from "@/app/auth/forgot-password/forms/hooks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { Link } from "@/components/ui/link";
import { P } from "@/components/ui/typography";

export function ForgotPasswordForm() {
  const { form, isSuccess } = useForgotPasswordForm();

  if (isSuccess) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Check Your Email</CardTitle>
          <CardDescription>Password reset instructions sent</CardDescription>
        </CardHeader>
        <CardContent>
          <P className="text-muted-foreground">
            If you registered using your email and password, you will receive a password reset
            email.
          </P>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reset Your Password</CardTitle>
        <CardDescription>
          Type in your email and we&apos;ll send you a link to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => (e.preventDefault(), form.handleSubmit())}>
          <FieldGroup>
            <form.AppField name="email">{(field) => <field.EmailField />}</form.AppField>
            <Button type="submit" className="w-full">
              Send reset email
            </Button>
          </FieldGroup>
          <div className="mt-4 text-center text-sm">
            Already have an account? <Link href="/auth/login">Login</Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
