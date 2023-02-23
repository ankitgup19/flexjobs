import styled from "styled-components";

export const StyleFormGroup = styled.div`
    margin: 0 0 16px;
    position: relative;
`
export const Input = styled.input`
    padding: 6px 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline: 0;
    line-height: ${props => props.theme.fontSize.lg};
`
export const Label = styled.label`
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
`
export const IcnPwMask = styled.span`
    position: absolute;
    right: 10px;
    top: 32px;
    color: ${props => props.theme.colors.primaryLight};
    cursor: pointer;
    width: 20px;
`