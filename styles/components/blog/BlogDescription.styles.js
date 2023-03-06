import styled from "styled-components";

export const BlogDescWrap = styled.div`
    box-shadow: rgb(0 0 0 / 3%) 0 2px 0 2px;
    padding: 0 1.2rem 1.5rem;
    .hero-wrap{
        margin: 0 -15px;
    }
    .header-overlay{
        position: relative;
        top: -25px;
        box-shadow: 0px 5px 8px 0px rgb(0 0 0 / 13%);
        border-top: 3px solid ${props => props.theme.colors.primary};
        padding: 2.4rem;
        background-color: ${props => props.theme.colors.white};
    }
`
export const H1 = styled.h1`
    font-size: 2.8rem;
    line-height: 3.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    margin: 0 0 1.6rem;
`