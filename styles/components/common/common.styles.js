import styled from "styled-components";

export const StyledContainerMd = styled.div`
    max-width: ${({ fullwidth }) => fullwidth ? null : "1170px"};
    margin: 0 auto;
    padding: ${({ layout }) => layout ? "13.2rem 1.5rem 0" : "0 1.5rem"};
    @media all and (max-width:1024px){
        padding: ${({ layout }) => layout ? "13.5rem 1.5rem 0" : "0 1.5rem"};
    }
    @media (min-width: 1400px) {
        max-width: ${({ fullwidth }) => fullwidth ? null : "1320px"};
    }
`

export const FeaturedWrap = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gridCol || (props.blog ? "58.33% auto" : props.filter ? "75% auto" : "1fr 1fr")};
    .left,
    .right{
        padding: ${props => props.blog ? "0 1.2rem" : ""};
    }
`