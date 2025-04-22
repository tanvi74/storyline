'use client'
import React from 'react';
import { EditorProvider, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const extensions = [StarterKit]; 

export default function RichEditor() {
    const editor = useEditor({
        extensions,
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl"
            },
        },
        // content: "<h1>Fuck you all!!</h1>",
    }); 

    // editor?.commands.setContent("");
 return (
    <div>
        <EditorContent
            editor = {editor}
        />
    </div>
 )
}
    
