import styled from "styled-components";

export const StyleFormGroup = styled.div`
    margin: 0 0 1.6rem;
    position: relative;
`;
export const Input = styled.input`
    padding: ${props => props.spacing ? "0.8rem 1.2rem" : "0.6rem 1.2rem"};
    border: 1px solid ${props => props.theme.colors.tertiartyMedium};
    border-radius: 4px;
    outline: 0;
    line-height: ${props => props.theme.fontSize.lg};
`;
export const Label = styled.label`
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
`;
export const IcnPwMask = styled.span`
    position: absolute;
    right: 10px;
    top: 32px;
    color: ${props => props.theme.colors.primaryLight};
    cursor: pointer;
`