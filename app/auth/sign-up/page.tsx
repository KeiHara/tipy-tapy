import { SignUpForm } from "@/app/auth/sign-up/forms";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Button variant="link" asChild className="self-start">
          <Link href="/">
            <ArrowLeft />
            Back to home
          </Link>
        </Button>
        <SignUpForm />
      </div>
    </div>
  );
}
