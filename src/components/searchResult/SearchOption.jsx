import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import SearchOptionMain from "./SearchOptionMain";
import BlogPromo from "../blog/BlogPromo";
import BlogSidebarWidgets from "../blog/BlogSidebarWidgets.jsx";
import BlogNews from "../blog/BlogNews.jsx";
import BlogCompanyLogos from "../blog/BlogCompanyLogos.jsx";
import BlogFooterLink from "../blog/BlogFooterLink.jsx";
import { FlexLayout } from "../layout/Layout";
import { SearchResultsWrap } from "../../../styles/components/searchResults/SearchResults.styles";

const SearchOption = () => {
  return (
    <SearchResultsWrap>
      <FlexLayout filter="true">
        <>
          <Breadcrumb />
          <SearchOptionMain />
        </>
        <>
          <BlogPromo />
          <BlogSidebarWidgets text="FlexJobs in the News" center>
            <BlogNews />
            <BlogFooterLink text="More of This Week's News" />
          </BlogSidebarWidgets>
          <BlogSidebarWidgets noBorderTop text='Currently Hiring on FlexJobs' center>
            <BlogCompanyLogos />
            <BlogFooterLink text="See All New Jobs" />
          </BlogSidebarWidgets>
        </>
      </FlexLayout>
    </SearchResultsWrap>
  );
};

export default SearchOption;
