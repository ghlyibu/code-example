import React, { useEffect, useRef } from 'react';
import { Container } from './style';
import {basicSetup, EditorView} from 'codemirror';
import { Extension } from '@codemirror/state';
import {javascript} from '@codemirror/lang-javascript';
import {html} from '@codemirror/lang-html';

import {syntaxHighlighting} from '@codemirror/language';
import { dracula } from '@uiw/codemirror-theme-dracula';

export interface PropsType {
    handleRef?:(ref:EditorView)=>void
    type?: 'html'|'javascript'
}

const CodeEditor:React.FunctionComponent<PropsType> = (props:PropsType) => {
    const { handleRef,type='html' } = props;
    const ref = useRef(null);
    const editorView = useRef<EditorView|null>(null);
    useEffect(()=>{
        if(ref.current){
            if(editorView.current){
                editorView.current.destroy();
            }
            editorView.current = new EditorView({
                doc: '',
                extensions: [basicSetup,type==='html'?html():javascript(),dracula as unknown as Extension],
                parent: ref.current,
            });
            handleRef?.(editorView.current);
        }
    },[handleRef]);
    return <Container ref={ref}></Container>;
};

export default CodeEditor;
