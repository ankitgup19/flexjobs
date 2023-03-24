import styled from "styled-components";

export const MainHeading = styled.h1`
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.lg};
    line-height: 1.2;
    display: flex;
    margin: 1.6rem 0 .8rem;
    position: relative;
    .fa-info-circle {
        font-size: ${props => props.theme.fontSize.xs};
        color: ${props => props.theme.colors.primaryLighter};
        margin: 0 0 0 .7rem;
        align-self: center;
        cursor: pointer;
    }
`;
export const CountSortWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 2.4rem;
`;
export const CountHeading = styled.h4`
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.sm};
    line-height: 1.2;
    margin: 0;
`