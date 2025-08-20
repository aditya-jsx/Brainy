// "use client";

// import {
//     BlockNoteEditor,
//     PartialBlock
// } from "@blocknote/core";
// import { useBlockNote } from "@blocknote/react";
// import {BlockNoteView} from "@blocknote/shadcn";
// import "@blocknote/shadcn/style.css";
// import "@blocknote/core/style.css";
// import { useTheme } from "next-themes";

// interface EditorProps {
//     onChange: (value: string) => void;
//     initialContent?: string;
//     editable?: boolean;
// }

// export const Editor = ({
//     onChange,
//     initialContent,
//     editable
// }:EditorProps) => {
//     const {resolvedTheme} = useTheme();

//     const editor: BlockNoteEditor = useBlockNote({
//         editable,
//         initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
//         onEditorContentChange: (editor) => {
//             onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
//         },
//     });

//     return(
//         <div className="">
//             <BlockNoteView 
//             onChange={editor} 
//             theme={resolvedTheme === "dark" ? "dark" : "light"}
//             />
//         </div>
//     )
// }


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

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

export const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {
    const { resolvedTheme } = useTheme();

    // 1. Removed the deprecated `onEditorContentChange` from here.
    const editor: BlockNoteEditor = useBlockNote({
        editable,
        initialContent: initialContent
            ? JSON.parse(initialContent) as PartialBlock[]
            : undefined,
    });

    return (
        <div>
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