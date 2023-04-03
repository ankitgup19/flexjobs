import React, { Children } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import { FeaturedWrap } from "../../../styles/components/common/Common.styles";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <>
      <Header v1 />
      {props.children}
      <Footer />
    </>
  );
};

export const FlexLayout = (props) => {
  const [left, right] = Children.toArray(props.children);
  return (
    <FeaturedWrap {...props} className="ft-wrp">
      <LeftSec className="left" {...props}>
        {left}
      </LeftSec>
      <RightSection className="right">{right}</RightSection>
    </FeaturedWrap>
  );
};

export default Layout;

const LeftSec = styled.div`
  box-shadow: ${(props) => props.shadow && "rgba(0,0,0,0.03) 0 2px 0 2px"};
  padding: ${(props) => props.padding && "0 12px 15px"};
`;

const RightSection = styled.div`
  padding: 0 0 0 1.2rem;
`;
