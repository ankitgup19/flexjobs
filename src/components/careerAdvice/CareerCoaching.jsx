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
import HeaderWithIcon from "../careerCoaching/HeaderWithIcon.jsx";
import SectionHIW from "../careerCoaching/SectionHIW.jsx";
import BackToTop from "../common/BackToTop.jsx";
import s from "../../../styles/components/careerAdvice/CareerCoaching.styled.js";
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
          <SectionHIW>
            <HeaderWithIcon src='https://www.flexjobs.com/images/icons/streamline-bold/get-started.svg' text='How It Works' />
          </SectionHIW>        
          <HeaderWithIcon src='https://www.flexjobs.com/images/icons/streamline-bold/we-have-proof.svg' text='Benefits' />
          <s.P center>Here are just some of the many reasons to consider Career Coaching:</s.P>
          <s.Ul2col>
            <s.Ul2colLi>Develop a job search action plan</s.Ul2colLi>
            <s.Ul2colLi>Build confidence and find your strengths</s.Ul2colLi>
            <s.Ul2colLi>Get support for career changes and transitions</s.Ul2colLi>
            <s.Ul2colLi>Get answers to your questions</s.Ul2colLi>
            <s.Ul2colLi>Learn how to land a remote or flexible job</s.Ul2colLi>
            <s.Ul2colLi>Re-enter the workforce with best practices</s.Ul2colLi>
          </s.Ul2col>
          <BackToTop />
          <HeaderWithIcon src='https://www.flexjobs.com/images/icons/streamline-bold/special-savings-deals.svg' text='Pricing' />
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
