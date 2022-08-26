import { EditorView } from 'codemirror';
import React, { useCallback, useEffect, useRef } from 'react';
import CodeEditor from '../CodeEditor';
import { Container, EditorWrapper,PreviwWrapper } from './style';


export interface PropsType {
    doc: string
}

const CodePreviw:React.FunctionComponent<PropsType> = (props:PropsType) => {
    const editor = useRef<EditorView>();
    const preview = useRef<HTMLDivElement>();
    const iframe = useRef<HTMLIFrameElement>();
    const handlerEditor = useCallback((ref:EditorView)=>{
        editor.current = ref;
    },[]);
    const run = useCallback(()=>{
        if(iframe.current){
            preview.current?.removeChild(iframe.current);
        }
        iframe.current = document.createElement('iframe');
        iframe.current.setAttribute('style','');
        const {doc} = editor.current?.state||{};
        iframe.current.contentWindow?.document.write(doc?.toString()||'');
    },[]);

    const refresh = useCallback(()=>{
        // 
    },[]);
    return <Container>
        <EditorWrapper >
            <CodeEditor handleRef={handlerEditor} />
        </EditorWrapper>
        <PreviwWrapper ref={preview}>
            
        </PreviwWrapper>
    </Container>;
};

export default CodePreviw;
