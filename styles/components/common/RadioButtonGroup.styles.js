import styled from "styled-components";

export const RadioButtonGroupWrap = styled.div`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
`;
export const Radio = styled.input`
    position: absolute;
    clip: rect(0,0,0,0);
    pointer-events: none;
`;

export const Label = styled.label`
    color: ${props => props.theme.colors.tertiaryDarkest};
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.tertiaryLightest};
    font-size: ${props => props.theme.fontSize.xxxs};
    padding: 0.4rem 0.8rem;
    border-radius: 0.32rem;
    line-height: 1.8rem;
    cursor: pointer;
    &.active {
        background: ${props => props.theme.colors.tertiaryLighter};
        box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
    }
    &+label {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`