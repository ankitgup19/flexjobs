import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const PopupModal = (props) => {
  let popupRef = useRef();
  useEffect(() => {
    let clickHandler = (event) => {
      if (!popupRef.current.contains(event.target)) {
        props.setIsActive(null);
      }
    };
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });

  return (
    <Styled.Wrapper>
      <Styled.Content ref={popupRef}>
        <Styled.Header bgColor="#004F6D" textcolor="#fff">
          <h5>{props.heading}</h5>
          <button
            type="button"
            className="close-modal"
            textcolor="#fff"
            onClick={props.closeModal}
          >
            <i className="fa fa-times"></i>
          </button>
        </Styled.Header>
        {props.children}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default PopupModal;

const Styled = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 111;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textcolor};
    h5 {
      margin: 0;
      color: inherit;
      font-size: 1.6rem;
    }
    .close-modal {
      background-color: transparent;
      border: none;
      filter: invert(1) grayscale(100%) brightness(200%);
      font-size: 2rem;
      padding: 0;
      line-height: 2.4rem;
      cursor: pointer;
      opacity: 0.5;
      &:hover {
        opacity: 0.75;
      }
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        opacity: 1;
        padding: 0.8rem;
        margin: -0.8rem;
        border-radius: 0.4rem;
      }
    }
  `,
  Content: styled.div`
    background-color: ${(props) => props.theme.colors.white};
    .modal-body {
      padding: 1.6rem;
      ul {
        margin: 0;
        padding: 1.6rem 1.6rem 1.6rem 2.4rem;
        li,
        p {
          line-height: 2.4rem;
        }
      }
    }
    @media all and (min-width: 768px) {
      width: 600px;
      margin: auto;
    }
  `,
};
