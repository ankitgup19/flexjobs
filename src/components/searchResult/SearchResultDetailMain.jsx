import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tabs from "./Tabs";

const SearchOptionMain = () => {
  return (
    <SearchOptionMainWrap>
      <H1>Manager</H1>
      <Tabs />
    </SearchOptionMainWrap >
  );
};

const SearchOptionMainWrap = styled.div`
  box-shadow: rgba(0,0,0,0.03) 0 2px 0 2px;
  padding: 1.6rem 0 26rem; 
`
const H1 = styled.h1`
  font-size: ${props => props.theme.fontSize.xl};
  line-height: 3.4rem;
  margin: 0 0 .8rem;
  padding: 0 1.2rem;
`;

export default SearchOptionMain;
