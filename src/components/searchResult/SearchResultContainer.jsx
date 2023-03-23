import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Search from "../common/Search";
import SearchHeader from "../common/SearchHeader";
import Filter from "./Filter";
import SearchResultList from "./SearchResultList";
import { FlexLayout } from "../layout/Layout";
import { SearchResultsWrap } from "../../../styles/components/searchResults/SearchResults.styles";

const SearchResultWrapper = () => {
  return (
    <SearchResultsWrap>
      <FlexLayout filter="true">
        <>
          <Breadcrumb />
          <Search type="transparent" country />
          <Filter />
          <SearchHeader />
          <SearchResultList />
        </>
        <>
          <p>RightSide Bar</p>
        </>
      </FlexLayout>
    </SearchResultsWrap>
  );
};

export default SearchResultWrapper;
