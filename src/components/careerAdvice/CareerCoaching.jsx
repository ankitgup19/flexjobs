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
import Pricing from "../../../styles/components/careerAdvice/CareerCoachingPricing.styled.js";
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
          <CareerCoachingTestimonialCarousel />
          <SectionHIW>
            <HeaderWithIcon
              src="https://www.flexjobs.com/images/icons/streamline-bold/get-started.svg"
              text="How It Works"
            />
          </SectionHIW>
          <HeaderWithIcon
            src="https://www.flexjobs.com/images/icons/streamline-bold/we-have-proof.svg"
            text="Benefits"
          />
          <s.P center>
            Here are just some of the many reasons to consider Career Coaching:
          </s.P>
          <s.Ul2col>
            <s.Ul2colLi>Develop a job search action plan</s.Ul2colLi>
            <s.Ul2colLi>Build confidence and find your strengths</s.Ul2colLi>
            <s.Ul2colLi>
              Get support for career changes and transitions
            </s.Ul2colLi>
            <s.Ul2colLi>Get answers to your questions</s.Ul2colLi>
            <s.Ul2colLi>Learn how to land a remote or flexible job</s.Ul2colLi>
            <s.Ul2colLi>Re-enter the workforce with best practices</s.Ul2colLi>
          </s.Ul2col>
          <BackToTop />
          <CareerCoaches />
          <HeaderWithIcon
            src="https://www.flexjobs.com/images/icons/streamline-bold/special-savings-deals.svg"
            text="Pricing"
          />
          <Pricing.Wrapper>
            <p className="description">
              A 30-minute Career Coaching session with a FlexJobs expert coach
              is $89. This is up to 35% off typical career coaching rates to
              support FlexJobs users in finding a better job faster!
            </p>
            <p className="text-center">
              <strong>Details to Keep In Mind:</strong>
            </p>
            <Pricing.InnerWrapper>
              <ul>
                <li>
                  Career Coaching sessions must be used within 90 days of
                  purchase.
                </li>
                <li>
                  Your purchased session cannot be transferred to anyone else.
                </li>
                <li>
                  Each Career Coaching session is 30 minutes. If you’d like more
                  time, you’re welcome to purchase another session.
                </li>
              </ul>
              <ul>
                <li>
                  There are no pro-rated or full refunds for unused time or
                  no-shows.
                </li>
                <li>
                  A brief resume screen is included with your Career Coaching
                  session. For more in-depth resume support, add a Resume Review
                  to your Career Coaching service with our{" "}
                  <a href="/career-coaching-resume-review-bundle">
                    Career Coaching &amp; Resume Review Bundle
                  </a>
                  .
                </li>
              </ul>
            </Pricing.InnerWrapper>
            <p className="text-center extra-space">
              Email{" "}
              <a href="mailto:coaching@flexjobs.com?Subject=Please%20let%20me%20know%20when%20Career%20Coaching%20is%20available%20again">
                coaching@flexjobs.com
              </a>{" "}
              to be added to the waitlist for Career Coaching.
            </p>
            <p>
              Not sure you need this particular service? FlexJobs offers a
              variety of{" "}
              <a href="/career-coaching-resume-review">
                career coaching, resume review, and mock interview services
              </a>{" "}
              for tailored support in your flexible and remote job search!
            </p>
          </Pricing.Wrapper>
        </CareerCoachingMain>
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
