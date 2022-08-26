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
    flex: 1;
    width: 50%;
    height: 100%;
    overflow: auto;
`;

export const PreviwWrapper = styled.div.attrs((props)=>{
    return {
        className: 'preview-wrapper',
        ...props,
    };
})`
    flex: 1;
    width: 50%;
    overflow: auto;
    height: 100%;
`;