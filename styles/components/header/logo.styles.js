import styled from "styled-components";

export const StyledA = styled.a`
    display: inline-block;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-family: "halcyon-medium";
    .logoImg{
        margin-right: 8px;
    }
    & > span{
        color: ${props => props.theme.colors.secondary};
    }
    &:hover{
        text-decoration: underline;
    }
`

export const StyledDiv = styled.div`
    padding: 14px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledWrap = styled.div`
    display: flex;
    align-items: center;
`