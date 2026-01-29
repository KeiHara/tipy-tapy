"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex flex-1 items-center justify-center text-muted-foreground">
      Loading editor...
    </div>
  ),
});

export function EditorWrapper() {
  return <Editor />;
}
