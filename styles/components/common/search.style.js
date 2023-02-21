import styled from "styled-components";

export const InputSearch = styled.input`
    background-color: #f1f9fe;
    width: 285px;
    height: 46px;
    padding: 6px 12px;
    border-width: 0 1px 0 0;
    border-top-left-radius: ${({bdrcurve}) => bdrcurve ? "4px" : ""};
    border-bottom-left-radius: ${({bdrcurve}) => bdrcurve ? "4px" : ""};
    outline: none;
    &:focus{
        border: 3px solid #007cad;
    }
    @media all and (max-width:1024px){
        width: 100%;
        height: auto;
        background-color: #fff;
    }
`
export const SearchWrap = styled.div`
    box-shadow: 0 3px 6px rgb(0 0 0 / 25%);
    display: flex;
    border: 1px solid #000;
    border-radius: 4px;
    @media all and (max-width:1024px){
        border: none;
        box-shadow: none;
    }
`

export const SearchBtn =  styled.button`
    background-color: #FF6843;
    border: none;
    padding: 0 12px;
    font-size: 21px;
    color: #fff;
    cursor: pointer;
    @media all and (max-width:1024px){
        padding: 8px 6px;
    }
`
export const Styledform =  styled.form`
    margin: 0;
`