import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    z-index: 1;
`
export const SearchWrap = styled.div`
    padding: 1.6rem 0;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    @media all and (max-width: 767px){
        padding: 1.5rem;
    }
`
