import styled, {css} from "styled-components";

export const BlogCardWrap = styled.div`
    border: 1px solid rgba(0,0,0,0.125);
    border-top: 0;
    padding: 0 .8rem;
    overflow: hidden;
    ${props => props.news && css`        
        border-bottom: 0;
    `}
`