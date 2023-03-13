import styled, { css } from "styled-components";

export const BlogCardWrap = styled.div`
    padding: 0 .8rem;
    overflow: hidden;
    ${props => props.news && css`        
        border-bottom: 0;
    `}
`