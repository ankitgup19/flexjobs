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
        /* padding-left: 0;
        padding-right: 0;
        margin: 0 -15px; */
    }
`

export const FeaturedWrap = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gridCol || (props.blog ? "58.33% auto" : props.filter ? "75% 25%" : "1fr 1fr")};
    /* margin: ${props => props.filter ? "1.6rem -1.5rem 0" : "1.6rem -1.5rem 0"}; */
    margin: 1.6rem 0 0;
    .left,
    .right{
        padding: ${props => props.blog ? "0 1.2rem" : ""};
    }
`

export const LinkBtn = styled.a`
    background-color: ${props => props.theme.colors.secondary};
    border: 0;
    padding: 0.7rem 1.2rem;
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: ${props => props.fWeight || '700'};
    line-height: 1.5;
    color: ${props => props.theme.colors.white};    
    display: flex;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    outline: 0;
    &:hover,
    &:focus {
        text-decoration: underline;
    }
`