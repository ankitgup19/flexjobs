import styled from "styled-components";

export const StyledLink = styled.a`
    display: inline-block;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    &:hover{
        text-decoration: underline;
    }
    .logo-img{
        margin-right: 0.8rem;
    }
    & > .txt-highlight{
        color: ${props => props.theme.colors.secondary};
    }
`

export const StyledWrap = styled.div`
    padding: ${props => props.innerWrap ? null : "0.8rem 0"};
    display: flex;
    align-items: center;
    justify-content: ${props => props.innerWrap ? null : "space-between"};
`