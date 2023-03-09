import styled from "styled-components";

export const AdvSearchLink = styled.a`
    color: ${props => props.theme.colors.primaryLight};
    text-decoration: none;
    padding-left: 2.4rem;
    &:hover{
        text-decoration: underline;
    }
`