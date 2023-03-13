import styled from "styled-components";

export const FooterLink = styled.a`
    display: block;
    color: ${props => props.theme.colors.primaryLight};
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    line-height: 2.4rem;
    padding: 0 0 .8rem;
    .fa-angle-right {
        display: inline-block;
        /* font-weight: 400; */
        padding: 0 0 0 .5rem;
        vertical-align: top;
        line-height: 1.5;
    }
    &:hover {
        color: ${props => props.theme.colors.primaryDark};
        text-decoration: underline;
        .fa-angle-right {
            text-decoration: none;
        }
    }
`