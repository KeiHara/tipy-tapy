import { redirect } from "next/navigation";
import { Suspense } from "react";

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
      <p>
        <span className="text-muted-foreground">Email:</span> {user.email}
      </p>
      <p>
        <span className="text-muted-foreground">User ID:</span> {user.id}
      </p>
    </div>
  );
}

export default function ProtectedPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
        <p className="text-muted-foreground">
          This page is only accessible to authenticated users.
        </p>
      </div>

      <div className="p-4 border rounded-lg">
        <h2 className="font-semibold mb-2">Your Details</h2>
        <Suspense fallback={<p className="text-muted-foreground">Loading...</p>}>
          <UserDetails />
        </Suspense>
      </div>
    </div>
  );
}
