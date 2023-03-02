import styled from "styled-components";

export const PopoverWrap = styled.div`
    position: absolute;
    top: 0;
    left: 238px;
    transform: translateY(-45.5%);
    z-index: 1070;
    display: block;
    max-width: 576px;
    font-size: ${props => props.theme.fontSize.xs};
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-decoration: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    word-wrap: break-word;
    background-color: ${props => props.theme.colors.white};
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
    .visually-hidden {
        display: none;
    }

    .popover-arrow {
        position: absolute;
        display: block;
        width: 1.6rem;
        height: .8rem
    }

    .popover-arrow::after,
    .popover-arrow::before {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid
    }
    .popover-header {
        padding: .8rem 1.6rem;
        margin: 0;
        font-size: ${props => props.theme.fontSize.sm};
        background-color: #f0f0f0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .popover-body {
        padding: 1.6rem;
        color: #212529;
    }
    .fa-map-marker-alt {
        margin: 0 1rem 0 .2rem;
    }
`
export const IconGuideList = styled.div`
    list-style: none;
    margin: ${props => props.flex ? '0' : '0 0 1.6rem'};
    li {
        display: flex;
        align-items: center;
        font-size: ${props => props.theme.fontSize.xxxs};
    }    
`
export const ImgGlobal = styled.img`
    margin: 0 .5rem 0 0.3rem;
`
export const ImgFlag = styled.img`
    margin: 0 .5rem 0 0;
`
export const P = styled.p`
    margin: 0;
`
export const Arrow = styled.div`
    position: absolute;
    top: 0px;
    transform: translate(-8px, 173px);
    &::before,
    &::after {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
    }
    &::before {
        left: 0;
        border-width: 0.8rem 0.8rem 0.8rem 0;
        border-right-color: rgba(0,0,0,.25);        
    }
    &::after {
        left: 1px;
        border-width: 0.8rem 0.8rem 0.8rem 0;
        border-right-color: ${props => props.theme.colors.white};
    }
`