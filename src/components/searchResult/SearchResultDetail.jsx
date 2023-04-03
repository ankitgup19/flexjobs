import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import SearchResultDetailMain from "./SearchResultDetailMain";
import BlogSidebarWidgets from "../blog/BlogSidebarWidgets.jsx";
import BlogFooterLink from "../blog/BlogFooterLink.jsx";
import BlogTestimonialSlider from "../blog/BlogTestimonialSlider";
import BlogNewsletter from "../blog/BlogNewsletter";
import WidgetFreeMonth from "../common/WidgetFreeMonth.jsx";
import { FlexLayout } from "../layout/Layout";

const SearchOption = () => {
  return (
    <FlexLayout filter="true" className='pg-srch-rslt'>
      <>
        <Breadcrumb />
        <SearchResultDetailMain />
      </>
      <>
        <BlogSidebarWidgets
          text="Success Stories Just In!"
          center
        >
          <BlogTestimonialSlider />
          <BlogFooterLink text="Read More Success Stories" extraSpacing />
        </BlogSidebarWidgets>
        <BlogSidebarWidgets
          text="Weekly Newsletter"
          center
          iconSrc="https://www.flexjobs.com/images/icons/newletter-graphic.svg"
          iconTxt="Weekly Newsletter icon"
          iconWidth='64'
          headerDirectionColumn
        >
          <BlogNewsletter />
        </BlogSidebarWidgets>
        <WidgetFreeMonth/>
      </>
    </FlexLayout>
  );
};

export default SearchOption;
