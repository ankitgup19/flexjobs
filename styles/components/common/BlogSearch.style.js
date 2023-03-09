import styled from "styled-components";

export const InputSearch = styled.input`
    &[type='text'] {
        min-width: 28.5rem;
        padding: .6rem 1.2rem;
        border: 1px solid ${props => props.theme.colors.tertiartyMedium};
        border-top-left-radius: ${({ bdrcurve }) => bdrcurve ? "0.4rem" : ""};
        border-bottom-left-radius: ${({ bdrcurve }) => bdrcurve ? "0.4rem" : ""};
        outline: none;
        line-height: ${props => props.theme.lineHeight.lg};
        @media all and (max-width: 991px){
            width: 100%;
            height: auto;
            background-color: ${props => props.theme.colors.white};
        }
    }
`
export const SearchWrap = styled.div`
    display: flex;
    overflow: hidden; 
    margin: 0 0 1.6rem; 
`

export const SearchBtn = styled.button`
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 0 1.2rem;
    font-size: 1.7rem;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    margin-left: -1px;
    &:hover {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.primary};
    }
    .fa-search {
        padding: 0.9rem 0 0;
    }
`
export const Styledform = styled.form`
    margin: 3rem 0 0;
    padding: 0 1.2rem;
    @media (min-width: 768px) {
        flex: 0 0 auto;
        width: 41.66666667%;
        margin-left: 58.33333333%;
    }
    @media (min-width: 992px) {
        flex: 0 0 auto;
        width: 33.33333333%;
        margin-left: 66.66666667%;
    }
`