import { H1, P } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <H1 className="mb-4">Welcome to Tipy Tapy</H1>
        <P className="text-muted-foreground text-center max-w-md">
          Get started by editing this page or sign in to access protected content.
        </P>
      </div>
    </main>
  );
}
