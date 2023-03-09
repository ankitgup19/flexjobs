import React from "react";
import { FlexLayout } from "../layout/Layout";
import BlogHeader from "./BlogHeader";
import BlogSearch from "./BlogSearch";
import BlogPromo from "./BlogPromo.jsx";
import {
  BlogDescWrap,
  SPAN,
} from "../../../styles/components/blog/BlogDescription.styles";

const BlogDescription = (props) => {
  return (
    <FlexLayout filter>
      <BlogDescWrap>
        <div className="hero-wrap">
          <img
            width="1024"
            height="512"
            src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/01/05134145/Top-100-Companies-to-Watch-for-Remote-Jobs-in-2023_2-1024x512.jpg"
          ></img>
        </div>
        <BlogHeader
          title="Top 100 Companies to Watch for Remote Jobs in 2023"
          author="Jessica Howington"
          author_href="/blog/post/author/jessica-howington"
          author_post="Senior Content Manager
        "
        />
        <p>
          FlexJobs is excited to announce its 10th annual
          <strong> Top 100 Companies to Watch for Remote Jobs</strong> list!
        </p>
        <p>
          For over a decade, FlexJobs has tracked and analyzed remote job
          postings to help connect job seekers with remote career opportunities.
          And as the professional workforce continues to shift in{" "}
          <a
            href="https://www.flexjobs.com/blog/post/work-life-balance-or-better-pay-two-thirds-choose-balance/"
            target="_blank"
            rel="noopener noreferrer"
          >
            preference for remote jobs
          </a>
          , this list celebrates the companies embracing the present (and
          future) of work.
        </p>
        <p>
          <SPAN color="#fc5600" fontsize="3rem">
            <strong>Note</strong>:
          </SPAN>
        </p>
        <p>
          <em>
            <span>
              FlexJobs is the longtime leader in helping job seekers find the
              highest-quality{" "}
              <a
                href="https://www.flexjobs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                remote, work-from-home, hybrid, and flexible jobs
              </a>
              . You can{" "}
            </span>
            <a
              href="https://www.flexjobs.com/Pricing.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>sign up for premium-level access</span>
            </a>
            <span>
              {" "}
              to our database of hand-screened job listings, as well as job
              search and career webinars, and many other great resources! Learn
              today how{" "}
            </span>
            <span>FlexJobs can empower your job search</span>
            <span>!</span>
          </em>
        </p>
        <h2>
          <img
            src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/01/07102038/checklist-for-career-change-any-age-2.png"
            alt="news icon"
            width="44"
            height="44"
            title="news icon"
          />
          {" Top Remote Company Trends"}
        </h2>
        <p>
          From 2021 to 2022, FlexJobs saw a{" "}
          <strong>
            20% increase in the number of remote job listings on the site
          </strong>
          , compared with just 12% the previous year. And with the wider{" "}
          <a
            href="https://www.flexjobs.com/blog/post/remote-work-statistics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            adoption of remote work
          </a>{" "}
          came more variety in job titles and career levels. While a majority of
          positions were for{" "}
          <a
            href="https://www.flexjobs.com/search?search=&amp;location=&amp;nous=&amp;country=&amp;noworld=&amp;career_level%5B%5D=Experienced&amp;accolade=&amp;will_travel%5B%5D=&amp;exclude="
            target="_blank"
            rel="noopener noreferrer"
          >
            experienced-level jobs
          </a>{" "}
          (62%),{" "}
          <a
            href="https://www.flexjobs.com/search?search=&amp;location=&amp;nous=&amp;country=&amp;noworld=&amp;career_level%5B%5D=Manager&amp;accolade=&amp;will_travel%5B%5D=&amp;exclude="
            target="_blank"
            rel="noopener noreferrer"
          >
            manager
          </a>{" "}
          and{" "}
          <a
            href="https://www.flexjobs.com/search?search=&amp;location=&amp;nous=&amp;country=&amp;noworld=&amp;career_level%5B%5D=Senior+Level+Manager+%28Director%2C+Dept+Head%2C+VP%2C+General+Manager%2C+C-level%29&amp;accolade=&amp;will_travel%5B%5D=&amp;exclude="
            target="_blank"
            rel="noopener noreferrer"
          >
            senior-level roles
          </a>{" "}
          claimed 32% of the remote job listings. The remaining 6% of postings
          were attributed to{" "}
          <a
            href="https://www.flexjobs.com/search?search=&amp;location=&amp;nous=&amp;country=&amp;noworld=&amp;career_level%5B%5D=Entry-Level&amp;accolade=&amp;will_travel%5B%5D=&amp;exclude="
            target="_blank"
            rel="noopener noreferrer"
          >
            entry-level jobs
          </a>
          .
        </p>
        <h3>
          <strong>
            <SPAN color="#fc563c">— </SPAN>
          </strong>
          Top Remote Career Categories
        </h3>
        <p>
          <span>
            With remote work shifting from a pandemic-era policy to a permanent
            business solution throughout 2022, this year’s top{" "}
            <a
              href="https://www.flexjobs.com/remote-jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              career categories
            </a>{" "}
            reflect the{" "}
            <strong>
              wide-scale adoption of remote work across various industries
            </strong>
            .
          </span>
        </p>
        <p>
          For anyone looking for remote work, these seven categories are ones to
          watch in 2023:
        </p>
        <ol>
          <li>
            <a
              href="https://www.flexjobs.com/remote-jobs/computer-it"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer &amp; IT
            </a>
          </li>
          <li>
            <a
              href="https://www.flexjobs.com/remote-jobs/marketing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marketing
            </a>
          </li>
          <li>
            <a
              href="https://www.flexjobs.com/remote-jobs/accounting"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accounting &amp; Finance
            </a>
          </li>
          <li>
            <a
              href="https://www.flexjobs.com/remote-jobs/project-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Management
            </a>
          </li>
          <li>
            <a
              href="https://www.flexjobs.com/remote-jobs/healthcare-medical"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medical &amp; Health
            </a>
          </li>
          <li>
            <a
              href="https://www.flexjobs.com/remote-jobs/human-resources-recruiting"
              target="_blank"
              rel="noopener noreferrer"
            >
              HR &amp; Recruiting
            </a>
          </li>
          <li>
            <a
              href="https://www.flexjobs.com/remote-jobs/customer-service-call-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Customer Service
            </a>
          </li>
        </ol>
      </BlogDescWrap>
      <>
        <BlogSearch />
        <BlogPromo />
      </>
    </FlexLayout>
  );
};

export default BlogDescription;
