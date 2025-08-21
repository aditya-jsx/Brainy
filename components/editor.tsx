"use client";

import {
    BlockNoteEditor,
    PartialBlock
} from "@blocknote/core";
import { useBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore();

    const handleUpload= async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file
        });

        return response.url;
    }


    // 1. Removed the deprecated `onEditorContentChange` from here.
    const editor: BlockNoteEditor = useBlockNote({
        editable: editable,
        initialContent: initialContent
            ? JSON.parse(initialContent) as PartialBlock[]
            : undefined,
        uploadFile: handleUpload
    });

    return (
        <div className="editor-wrapper">
            {/* 2. Added the required `editor` prop and the `onChange` handler. */}
            <BlockNoteView
                editor={editor}
                onChange={() => {
                    onChange(JSON.stringify(editor.document, null, 2));
                }}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
            />
        </div>
    )
}

export default Editor;