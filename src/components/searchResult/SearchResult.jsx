import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Search from "../common/Search";
import Filter from "./Filter";
import { MainContainer, AsideContainer } from "../layout/Layout";
import { SearchResultsWrap } from "../../../styles/components/searchResults/SearchResults.styles";

const SearchResult = () => {
    return (
        <SearchResultsWrap>
            <MainContainer>
                <Breadcrumb/>
                <Search type="transparent" country/>
                <Filter/>
            </MainContainer>
            <AsideContainer>
                <p>RightSide Bar</p>
            </AsideContainer>
        </SearchResultsWrap>
    )
}

export default SearchResult;