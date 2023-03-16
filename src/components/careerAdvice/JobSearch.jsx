import React from "react";
import { FlexLayout } from "../layout/Layout";
import Breadcrumb from "../common/Breadcrumb";
import JobSearchHeader from "./JobSearchHeader";
import JobSearchUsingTopic from "./JobSearchUsingTopic";
import JobSearchQuestions from "./JobSearchQuestions";
import BlogPromo from "../blog/BlogPromo";
import BlogSidebarWidgets from "../blog/BlogSidebarWidgets";
import BlogTestimonialSlider from "../blog/BlogTestimonialSlider";
import BlogFooterLink from "../blog/BlogFooterLink";
import BlogNewsletter from "../blog/BlogNewsletter";

const JobSearch = () => {
  return (
    <FlexLayout filter>
      <>
        <Breadcrumb />
        <JobSearchHeader
          heading="Job Search and Career Advice"
          description="We want to help you have a successful job search and, beyond that, a career you love. Our Career Coaches and other expert team members answer questions and provide practical advice on finding a job, exploring different paths, and succeeding as a remote or flexible worker."
          rightImgUrl="https://www.flexjobs.com/images/bg-advice.png"
          bgImgUrl="https://www.flexjobs.com/images/bg-75.png"
        />
        <JobSearchUsingTopic />
        <JobSearchQuestions />
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

export default JobSearch;
