import styled from "styled-components";

export const MainHeading = styled.h1`
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.lg};
    line-height: 1.2;
    display: flex;
    margin: 0 0 .8rem;
    .fa-info-circle {
        font-size: ${props => props.theme.fontSize.xs};
        color: ${props => props.theme.colors.primaryLighter};
        margin: 0 0 0 .7rem;
        align-self: center;
    }
`
export const CountHeading = styled.h4`
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.sm};
    line-height: 1.2;
    margin: 0;
`