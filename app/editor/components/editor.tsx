"use client";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Image from "@tiptap/extension-image";

import { EditorToolbar } from "./editor-toolbar";
import "./editor.scss";

const extensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3],
    },
  }),
  Placeholder.configure({
    placeholder: "Start writing...",
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Highlight.configure({
    multicolor: true,
  }),
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  Image,
];

const initialContent = "<p></p>";

export function Editor() {
  return (
    <div className="editor-container">
      <EditorProvider
        extensions={extensions}
        content={initialContent}
        immediatelyRender={false}
        slotBefore={
          <div className="editor-toolbar-wrapper">
            <EditorToolbar />
          </div>
        }
        editorContainerProps={{
          className: "editor-content-wrapper",
        }}
        editorProps={{
          attributes: {
            class: "tiptap ProseMirror",
          },
        }}
      />
    </div>
  );
}
