import React from "react";
import styled from "styled-components";
import { FlexLayout } from "../layout/Layout";
import { Link } from "../../../styles/components/blog/BlogDescription.styles";

const PromoBanner = () => {
  return (
    <BannerWrap>
      <FlexLayout gridCol="25% auto">
        <div className="img-wrap">
          <img
            src="https://www.flexjobs.com/images/badge-verified-jobs.svg"
            alt="verified jobs graphic"
            width="175"
            height="160"
          />
        </div>
        <div className="content-wrap">
          <h2>
            FlexJobs Is <span class="underline">SO Much More</span> Than Just a
            Job Board
          </h2>
          <p>
            In addition to helpful articles like this one, members get unlimited
            access to:
          </p>
          <InnerWrap>
            <ul>
              <li>
                <i className="fa fa-check"></i> Highest Quality Remote &
                Flexible Jobs
              </li>
              <li>
                <i className="fa fa-check"></i> 200+ Expert Skills Tests
              </li>
              <li>
                <i className="fa fa-check"></i> Soft Skills Courses
              </li>
            </ul>
            <ul>
              <li>
                <i className="fa fa-check"></i> Virtual Job Fairs
              </li>
              <li>
                <i className="fa fa-check"></i> Weekly Career Coach Q&As
              </li>
              <li>
                <i className="fa fa-check"></i> And so much more…
              </li>
            </ul>
          </InnerWrap>
          <div className="text-center">
            <Link
              href="/registration/signup"
              className="btn-secondry"
              type="sm"
            >
              Join FlexJobs Now!
            </Link>
          </div>
        </div>
      </FlexLayout>
    </BannerWrap>
  );
};

export default PromoBanner;

const BannerWrap = styled.div`
  background-color: ${props => props.theme.colors.lightBlue1};
  .img-wrap {
    background: url("https://www.flexjobs.com/images/img-rocket-bg-dark.svg")
      no-repeat right center;
    background-size: cover;
    padding: 1.6rem;
    height: 100%;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .content-wrap {
    padding: 2.4rem 0.8rem 2.4rem 0;
    h2 {
      text-align: center;
      line-height: 3rem;
      margin: 0 0 1.6rem;
      .underline {
        position: relative;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          left: 0;
          background-color: ${props => props.theme.colors.secondary};
          height: 3px;
          width: 100%;
          bottom: 0;
          transform: skew(-35deg);
        }
      }
    }
    p {
      line-height: 2rem;
    }
  }
  .text-center {
    text-align: center;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  ul {
    margin: 0.4rem 0 1.6rem;
    padding: 0 0 0 1.2rem;
    list-style: none;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2rem;
    li {
      margin: 0 0 0.8rem;
      display: flex;
      align-items: center;
      i {
        color: ${props => props.theme.colors.primaryLight};
        margin-right: 0.4rem;
      }
    }
  }
`;
