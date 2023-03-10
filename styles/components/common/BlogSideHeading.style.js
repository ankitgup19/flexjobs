import styled from "styled-components";

export const BlogSideHeadingWrap = styled.h3`
    border-width: 2px 1px 0;
    border-style: solid;
    border-color: ${props => props.theme.colors.primary} #e1e8ef;
    margin: 1.6rem 0 0;
    padding: 1.6rem .8rem 0;
    font-size: ${props => props.theme.fontSize.md};
`
export const BlogSideHeadingIcon = styled.img`
    margin: 0 1.3rem 1.2rem 0;
`