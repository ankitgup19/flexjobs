import styled from "styled-components";

export const AdvSearchLink = styled.a`
    color: ${props => props.theme.colors.primary_light};
    text-decoration: none;
    padding-left: 24px;
    &:hover{
        text-decoration: underline;
    }
`