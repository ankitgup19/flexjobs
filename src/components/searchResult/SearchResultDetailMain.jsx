import React from 'react';
import styled from 'styled-components';
import Tabs from "./Tabs";
import PageHeader from "../common/PageHeader";

const SearchResultDetailMain = () => {
  return (
    <SearchResultDetailMainWrap>
      <PageHeader
        mainHeading='Manager'
      />
      <Tabs />
    </SearchResultDetailMainWrap >
  );
};

const SearchResultDetailMainWrap = styled.div`
  box-shadow: rgba(0,0,0,0.03) 0 .2rem 0 .2rem;
  padding: 1.6rem 0 26rem; 
`

export default SearchResultDetailMain;
