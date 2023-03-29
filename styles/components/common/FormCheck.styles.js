import styled from "styled-components";

export const StyledFormCheck = styled.div`
    display: flex;
    align-items: center;
    margin: ${props => props.spacing ? "0 0 2.4rem" : null};
`;

export const InputCheck = styled.input`
    width: 16px;
    height: 16px;
    margin-right: 8px;
    &:focus{
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 4px rgb(13 110 253 / 25%);
    }
    &:active{
        filter: brightness(90%);
    }
`;

export const Label = styled.label`
    font-weight: ${props => props.labelBold ? "600" : null};
    .linked-url{
        color: ${props => props.theme.colors.primaryLight};
        font-weight: 600;
        text-decoration: none;
        &:hover{
            color: ${props => props.theme.colors.primaryDark};
            text-decoration: underline;
        }
    }
`