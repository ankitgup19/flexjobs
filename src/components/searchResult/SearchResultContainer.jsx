import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Breadcrumb from "../common/Breadcrumb";
import Search from "../common/Search";
import SearchHeader from "../common/SearchHeader";
import Filter from "./Filter";
import SearchResultList from "./SearchResultList";
import { FlexLayout } from "../layout/Layout";
import Tabs from "./Tabs";
import PageHeader from "../common/PageHeader";
import { SearchResultsWrap } from "../../../styles/components/searchResults/SearchResults.styles";

const SearchResultWrapper = () => {
  const [flexLayoutFilter, setFlexLayoutFilter] = useState(true);

  const toggleLayout = () => {
    setFlexLayoutFilter(true);
  };
  
  return (
    <SearchResultsWrap>
      <FlexLayout filter={flexLayoutFilter}>
        <>
          <Breadcrumb />
          <Search type="transparent" country />
          <Filter />
          <SearchHeader />
          <SearchResultList />
        </>
        <>
          {flexLayoutFilter ? <p>RightSide Bar</p> : 
          <JobViewInside className="JobViewInside">
            <button
              onClick={toggleLayout}
              type="button" className="btn-close" id="close-inset-detail" aria-hidden="true" />
            <PageHeader
              mainHeading='Manager'
              borderBottom='true'
            />
            <Tabs inside='true' />
          </JobViewInside>}
        </>
      </FlexLayout>
    </SearchResultsWrap>
  );
};

export default SearchResultWrapper;

const JobViewInside = styled.div`
  width: 600px;
  border: 2px solid #979797;
  background: #fff;
  margin: 0;
  overflow-y: auto;
  height: calc(100vh - 163px);
  position: fixed;
  top: 163px;
  padding-bottom: 120px;
  z-index: 1;
  padding: 2.4rem;
  .btn-close {
    box-sizing: content-box;
    width: 1rem;
    height: 1rem;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: .5;
    float: right;
    cursor: pointer;
}
`
