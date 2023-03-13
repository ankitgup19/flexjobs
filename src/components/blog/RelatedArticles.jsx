import React from "react";
import BlogCard from "./BlogCard";
import { HeadWrap, H2 } from "../../../styles/components/blog/Blog.styles";
import styled from "styled-components";

const RelatedArticles = () => {
  return (
    <ArticleWrap>
      <HeadWrap>
        <H2 className="h2">Related Articles</H2>
      </HeadWrap>
      <div className="inner-wrap">
        <BlogCard
          href="/blog/post/companies-hiring-remote-work-from-home-job"
          img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/08/02083509/Companies-Hiring-for-Remote-Work-From-Home-Jobs-Right-Now-2-353x177.jpeg"
          name="25 Companies Hiring for Remote, Work-From-Home Jobs Right Now"
          width="353"
          height="177"
          type="rel-article"
        />
        <BlogCard
          href="/blog/post/how-to-find-companies-that-let-you-work-from-home"
          img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/12/14123406/How-to-Find-Companies-That-Let-You-Work-From-Home-353x177.jpg"
          name="How to Find Companies That Let You Work From Home"
          width="353"
          height="177"
          type="rel-article"
        />
        <BlogCard
          href="/blog/post/20-companies-offering-remote-jobs-worldwide"
          img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/02/16051257/20-Companies-Offering-Remote-Jobs-Worldwide-2-353x177.jpg"
          name="20 Companies Offering Remote Jobs Worldwide"
          width="353"
          height="177"
          type="rel-article"
        />
        <BlogCard
          href="/blog/post/jobs-for-late-risers"
          img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/01/12073535/10-Flexible-Careers-for-Late-Risers-353x177.jpg"
          name="10 Flexible Jobs for Night Owls and Late Risers"
          width="353"
          height="177"
          type="rel-article"
        />
      </div>
    </ArticleWrap>
  );
};

export default RelatedArticles;

const ArticleWrap = styled.div`
  .inner-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
  }
`;
