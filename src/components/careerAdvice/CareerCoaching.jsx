import React from "react";
import { FlexLayout } from "../layout/Layout";
import Breadcrumb from "../common/Breadcrumb";
import CareerCoachingHeaderContent from "./CareerCoachingHeaderContent.jsx";
import CareerCoachingMain from "./CareerCoachingMain.jsx";
import BlogPromo from "../blog/BlogPromo";
import BlogSidebarWidgets from "../blog/BlogSidebarWidgets";
import BlogTestimonialSlider from "../blog/BlogTestimonialSlider";
import CareerCoachingTestimonialCarousel from "./CareerCoachingTestimonialCarousel.jsx";
import BlogFooterLink from "../blog/BlogFooterLink";
import BlogNewsletter from "../blog/BlogNewsletter";
import CareerCoaches from "../careerCoaching/CareerCoaches";
const CareerCoaching = () => {
  return (
    <FlexLayout filter>
      <>
        <p style={{ margin: "2rem 0 0" }}>&nbsp;</p>
        <Breadcrumb />
        <CareerCoachingMain>
          <CareerCoachingHeaderContent
            text="Career Coaching - "
            textEmphasized="Temporarily Sold Out"
          ></CareerCoachingHeaderContent>
          <CareerCoachingTestimonialCarousel/>
        </CareerCoachingMain>
        <CareerCoaches />
      </>
      <>
        <BlogPromo />
        <BlogSidebarWidgets text="Success Stories Just In!" center>
          <BlogTestimonialSlider />
          <BlogFooterLink text="Read More Success Stories" extraSpacing />
        </BlogSidebarWidgets>
        <BlogSidebarWidgets
          text="Weekly Newsletter"
          center
          iconSrc="https://www.flexjobs.com/images/icons/newletter-graphic.svg"
          iconTxt="Weekly Newsletter icon"
          iconWidth="64"
          headerDirectionColumn
        >
          <BlogNewsletter />
        </BlogSidebarWidgets>
      </>
    </FlexLayout>
  );
};

export default CareerCoaching;
