"use client";

import { Toolbar, ToolbarGroup, ToolbarSeparator } from "@/components/tiptap-ui-primitive/toolbar";
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button";
import { HeadingButton } from "@/components/tiptap-ui/heading-button";
import { MarkButton } from "@/components/tiptap-ui/mark-button";
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu";
import { BlockquoteButton } from "@/components/tiptap-ui/blockquote-button";
import { CodeBlockButton } from "@/components/tiptap-ui/code-block-button";
import { TextAlignButton } from "@/components/tiptap-ui/text-align-button";
import { ColorHighlightButton } from "@/components/tiptap-ui/color-highlight-button";

export function EditorToolbar() {
  return (
    <Toolbar>
      {/* History */}
      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* Headings */}
      <ToolbarGroup>
        <HeadingButton level={1} />
        <HeadingButton level={2} />
        <HeadingButton level={3} />
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* Text formatting */}
      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* Highlight */}
      <ToolbarGroup>
        <ColorHighlightButton highlightColor="var(--tt-color-highlight-yellow)" />
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* Text alignment */}
      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* Lists */}
      <ToolbarGroup>
        <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* Block elements */}
      <ToolbarGroup>
        <BlockquoteButton />
        <CodeBlockButton />
      </ToolbarGroup>
    </Toolbar>
  );
}
