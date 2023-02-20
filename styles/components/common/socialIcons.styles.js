import styled from "styled-components";

export const SocialIconsUl = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
`

export const StyledIconA = styled.a`
    padding: 12px;
    color: ${props => props.theme.color};
    display: inline-block;
    font-size: 3rem;
`