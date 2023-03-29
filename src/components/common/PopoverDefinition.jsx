import React from "react";
import styled from "styled-components";
// import { Arrow} from "../../../styles/components/common/Popover.styles.js";

const Popover = (props) => {

  return (
    <>
      <PopoverWrap role="tooltip" className='popover'>
        <Arrow />
        <PopoverHeader>{props.head}</PopoverHeader>
        <PopoverBody dangerouslySetInnerHTML={{__html: props.body}}/>
      </PopoverWrap>
    </>
  )
};

const PopoverWrap = styled.div`
    position: absolute;
    top: 0;
    right: 3.5rem;
    transform: translateY(-45.5%);
    z-index: 1070;
    display: block;
    max-width: 40rem;
    font-size: ${props => props.theme.fontSize.xs};
    line-height: 1.5;
    text-align: left;
    background-color: #03506c;
    border-radius: .5rem;
    color: ${props => props.theme.colors.white};
`;
const PopoverBody = styled.div`
    padding: 1.6rem;
    a {
      color: ${props => props.theme.colors.white};
    }
`;
const PopoverHeader = styled.h3`
    padding: .8rem 1.6rem 0;
    margin: 0;
    font-size: ${props => props.theme.fontSize.sm};
    color: ${props => props.theme.colors.white};
`;
const Arrow = styled.div`
    position: absolute;
    right: 0;
    top: calc(50% - .4rem);
    &::before {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent transparent transparent #03506c;
        border-style: solid;
        border-width: 0.8rem 0 0.8rem 0.8rem;
    }
`

export default Popover;