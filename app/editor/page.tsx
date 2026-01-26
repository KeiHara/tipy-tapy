import { H2, P } from "@/components/ui/typography";

export default function EditorPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="mb-4">
        <H2 className="border-b-0">Editor</H2>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <P className="text-muted-foreground">Editor content goes here</P>
      </div>
    </div>
  );
}
