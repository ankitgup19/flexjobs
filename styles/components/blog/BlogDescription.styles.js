import styled from "styled-components";

export const BlogPostWrap = styled.div`
    box-shadow: rgb(0 0 0 / 3%) 0 2px 0 2px;
    padding: 0 1.2rem 1.5rem;
    h2, 
    h3{
        margin: 1.6rem 0 0.8rem;
    }
    h2{
        font-size: ${props => props.theme.fontSize.lg};
    }
    h3{
        font-size: 2rem;
    }
    p,
    ol{
        font-size: ${props => props.theme.fontSize.md1};
        line-height: 3.1rem;
    }
    a{
        color: ${props => props.theme.colors.primaryLight};
        text-decoration: none;
        &:hover{
            color: ${props => props.theme.colors.primaryDark};
            text-decoration: underline;
        }
    }
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
        .author-details{
            color: #6c757d;
        }
    }
    center{
        margin: 0 0 50px;
    }
    .btn-wrap{
        margin: 4.8rem 0;
        text-align: center;
    }
`
export const H1 = styled.h1`
    font-size: ${props => props.theme.fontSize.xl};
    line-height: 3.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    margin: 0 0 1.6rem;
`
export const SPAN = styled.span`
    font-size: ${props => props.fontsize};
    color: ${props => props.color};
`

export const Link = styled.a`
    &.btn-secondry{
        font-weight: 500;
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.white};
        font-size: ${props => props.type = "sm" ? "1.6rem" : "2rem"};
        border-radius: 4px;
        padding: ${props => props.type = "sm" ? ".6rem 2.4rem" : ".8rem 1.6rem"};
        display: inline-block;
        line-height: ${props => props.type = "sm" ? "2.4rem" : "3rem"};;
        &:hover{
            color: ${props => props.theme.colors.white};
        }
    }
`