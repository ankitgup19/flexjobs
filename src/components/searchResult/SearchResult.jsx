import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Search from "../common/Search";
import SearchHeader from "../common/SearchHeader";
import Filter from "./Filter";
import { FlexLayout } from "../layout/Layout";
import { SearchResultsWrap } from "../../../styles/components/searchResults/SearchResults.styles";

const SearchResult = () => {
    return (
        <SearchResultsWrap>
            <FlexLayout filter="true">
                <>
                    <Breadcrumb/>
                    <Search type="transparent" country/>
                    <Filter/>   
                    <SearchHeader /> 
                </>
                <>
                    <p>RightSide Bar</p>
                </>
            </FlexLayout>
        </SearchResultsWrap>
    )
}

export default SearchResult;