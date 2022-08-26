import styled from 'styled-components';
export const Container = styled.div.attrs((props)=>{
    return {
        className: 'code-editor',
        ...props,
    };
})`
    height: ${({height})=> height||'100%'};
    width: ${({width})=> width||'100%'};
`;