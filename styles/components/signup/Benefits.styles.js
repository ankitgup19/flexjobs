import styled from "styled-components";

export const ItemWrap = styled.div`
    margin-top: 25px;
    text-align: center;
`

export const Title = styled.p`
    color: ${props => props.theme.colors.primary};
    margin: 6px 0 0;
`
export const ImgWrap = styled.div`
    position: relative;
    &::after{
        content: "";
        width: 100%;
        display: block;
        border-bottom: 1px solid #ced4da;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
    }
`

export const InnerWrap = styled.div`
    display: inline-block;
    padding: 0 5px;
    background-color: ${props => props.theme.colors.white};
`