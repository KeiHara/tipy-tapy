import { redirect } from "next/navigation";
import { Suspense } from "react";

import { LoginToast } from "@/app/protected/components/login-toast";
import { H2, H3, P } from "@/components/ui/typography";
import { createClient } from "@/lib/supabase/server";

async function UserDetails() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }

  return (
    <div className="space-y-2">
      <P>
        <span className="text-muted-foreground">Email:</span> {user.email}
      </P>
      <P>
        <span className="text-muted-foreground">User ID:</span> {user.id}
      </P>
    </div>
  );
}

export default function ProtectedPage() {
  return (
    <div className="flex flex-col gap-8">
      <Suspense>
        <LoginToast />
      </Suspense>
      <div>
        <H2 className="border-b-0 mb-4">Protected Page</H2>
        <P className="text-muted-foreground">
          This page is only accessible to authenticated users.
        </P>
      </div>

      <div className="p-4 border rounded-lg">
        <H3 className="text-base mb-2">Your Details</H3>
        <Suspense fallback={<P className="text-muted-foreground">Loading...</P>}>
          <UserDetails />
        </Suspense>
      </div>
    </div>
  );
}
