import styled from "styled-components";

export const StyledFormCheck = styled.div`
    display: flex;
    align-items: center;
`

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
`

export const Label = styled.label`
    .linked-url{
        color: #007CAD;
        font-weight: 600;
        text-decoration: none;
        &:hover{
            color: #23527c;
            text-decoration: underline;
        }
    }
`