import styled from "styled-components";

export const InputSearch = styled.input`
    background-color: #f1f9fe;
    min-width: 285px;
    height: 46px;
    padding: .6rem 1.2rem;
    border-width: 0 1px 0 0;
    border-top-left-radius: ${({ bdrcurve }) => bdrcurve ? "4px" : ""};
    border-bottom-left-radius: ${({ bdrcurve }) => bdrcurve ? "4px" : ""};
    outline: none;
    &:focus{
        border: 3px solid ${props => props.theme.colors.primaryLight};
    }
    @media all and (max-width:1024px){
        width: 100%;
        height: auto;
        background-color: ${props => props.theme.colors.white};
    }
`;
export const SearchWrap = styled.div`
    box-shadow: 0 3px 6px rgb(0 0 0 / 25%);
    display: flex;
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 4px;
    overflow: hidden;
    &.transparent{
        border: none;
        box-shadow: none;
        padding: 1.6rem 0 .8rem;
        .search-box{
            background-color: transparent;
            border: 1px solid ${props => props.theme.colors.tertiartyMedium};
            min-width: auto;
            flex-basis: 0;
            flex-grow: 1;
            height: auto;
            &:focus{
                border: 1px solid ${props => props.theme.colors.tertiartyMedium};
            }
        }
        .submit-btn{
            padding: .6rem 1.2rem;
            font-size: 1.6rem;
            background-color: ${props => props.theme.colors.secondary};
        }
    }
    @media all and (max-width:1024px){
        border: none;
        box-shadow: none;
    }
`;

export const SearchBtn = styled.button`
    background-color: #FF6843;
    border: none;
    padding: 0 1.2rem;
    font-size: 2.1rem;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    @media all and (max-width:1024px){
        padding: .8rem .6rem;
    }
`;
export const Styledform = styled.form`
    margin: 0;
`;

export const Select = styled.select`
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
    color: #212529;
    padding: .6rem 3.6rem .6rem 1.2rem;
    border: 1px solid ${props => props.theme.colors.tertiartyMedium};
    margin-left: .4rem;
    position: relative;
    &:focus{
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
`