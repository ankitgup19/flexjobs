import React from "react";
import styled from "styled-components";

const PopupModal = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
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
      color: ${(props) => props.textcolor};
      font-size: 2rem;
      padding: 0;
      line-height: 2.4rem;
      cursor: pointer;
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
