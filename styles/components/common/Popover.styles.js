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
    line-height: 1.5;
    text-align: left;
    background-color: ${props => props.theme.colors.white};
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
    .visually-hidden {
        display: none;
    }
    .fa-map-marker {
        margin: 0 1rem 0 .2rem;
    }
`
export const PopoverHeader = styled.h3`
    padding: .8rem 1.6rem;
    margin: 0;
    font-size: ${props => props.theme.fontSize.sm};
    background-color: #f0f0f0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
export const PopoverBody = styled.div`
    padding: 1.6rem;
    color: #212529;
`
export const VisuallyHidden = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`
export const IconGuideList = styled.div`
    list-style: none;
    margin: ${props => props.flex ? '0' : '0 0 1.6rem'};  
`
export const Li = styled.li`
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.fontSize.xxxs};   
`
export const ImgGlobal = styled.img`
    margin: 0 0.5rem 0 0.3rem;
`
export const ImgFlag = styled.img`
    margin: 0 0.5rem 0 0;
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