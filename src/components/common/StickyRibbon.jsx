import React from "react";
import styled from "styled-components";

const StickyRibbon = (props) => {
  return (
    <Styled.Wrapper>
      <img
        src="https://www.flexjobs.com/images/icons/savings-icon-white.svg"
        width="26"
        height="27"
        alt="savings icon"
        aria-hidden="true"
        title="savings icon"
        className="ribbon-img"
      />
      <p>{props.description}</p>
    </Styled.Wrapper>
  );
};

export default StickyRibbon;

const Styled = {
  Wrapper: styled.div`
    background-color: #008ec3;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    .ribbon-img {
      margin-right: 4px;
    }
    p {
      margin: 0;
    }
  `,
};
