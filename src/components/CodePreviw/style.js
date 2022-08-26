import styled from 'styled-components';
export const Container = styled.div.attrs((props)=>{
    return {
        className: 'code-previw',
        ...props,
    };
})`
    height: ${({height})=> height||'100%'};
    width: ${({width})=> width||'100%'};
    display: flex;
    
`;

export const EditorWrapper = styled.div.attrs((props)=>{
    return {
        className: 'editor-wrapper',
        ...props,
    };
})`
    position: relative;
    flex: 1;
    width: 50%;
    height: 100%;
    .code-editor {
        overflow: auto;
    }
`;

export const PreviwWrapper = styled.div.attrs((props)=>{
    return {
        className: 'preview-wrapper',
        ...props,
    };
})`
    flex: 1;
    width: 50%;
    height: 100%;
    iframe {
        height: 100%;
        width: 100%;
        border: 0;
    }
`;

export const RunButton = styled.button.attrs((props)=>{
    return {
        className: 'run-button',
        children: 'run',
        ...props,
    };
})`
    position: absolute;
    right: 0;
    top: 0;
`;