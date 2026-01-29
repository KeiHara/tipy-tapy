"use client";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { AppSidebar } from "./app-sidebar";

export function SidebarLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // For logged-in users, render sidebar layout
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger className="absolute top-4 left-4 z-50" />
        <div className={cn("flex flex-col flex-1 h-full w-full", className)}>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
