import React, { useState } from "react";
import { FlexLayout } from "../layout/Layout";
import ButtonGroup from "../common/ButtonGroup";
import BlogCard from "./BlogCard";
import BlogSearch from "./BlogSearch";
import BlogTabs from "./BlogTabs";
import {
  BlogWrap,
  BlogFooter,
} from "../../../styles/components/blog/Blog.styles";

const Blog = () => {
  const [latestCount, setLatestCount] = useState(3);
  const [trendingCount, setTrendingCount] = useState(3);
  const [activeTabVal, setActiveTabVal] = useState("latest");

  const loadMorePosts = () => {
    if (activeTabVal === "latest") {
      setLatestCount(latestCount + 3);
    } else if (activeTabVal === "trending") {
      setTrendingCount(trendingCount + 3);
    };
  };

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  const activeTab = (e) => {
    setActiveTabVal(e.target.getAttribute("name"));
  };

  return (
    <BlogWrap>
      <BlogSearch col />
      <FlexLayout blog>
        <>
          <BlogCard
            href="/blog/post/100-top-companies-with-remote-jobs-2023/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/01/05134145/Top-100-Companies-to-Watch-for-Remote-Jobs-in-2023_2-1024x512.jpg"
            name="Top 100 Companies to Watch for Remote Jobs in 2023"
            description="Explore FlexJobs’ Top 100 Companies list! Find companies offering the most remote jobs and research the fastest-growing careers for remote work."
            width="635"
            height="318"
            type="left-thumbnail"
          />
        </>
        <>
          <BlogCard
            href="/blog/post/common-job-search-scams-how-to-protect-yourself-v2/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/02/15050803/15-Common-Job-Search-Scams-and-How-to-Protect-Yourself-353x177.jpg"
            name="16 Common Job Search Scams and How to Protect Yourself"
            width="168"
            height="84"
            type="right-thumbnail"
          />
          <BlogCard
            href="/blog/post/remote-flexible-companies-with-4-day-workweek/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/01/26043200/12-Remote-and-Flexible-Companies-With-a-4-Day-Workweek-353x177.jpg"
            name="24 Remote and Flexible Companies With a 4-Day Workweek"
            width="168"
            height="84"
            type="right-thumbnail"
          />
          <BlogCard
            href="/blog/post/building-job-search-support-team/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/07/08084216/Building-Your-Job-Search-Support-Team-353x177.jpg"
            name="How to Build Your Job Search Support Team"
            width="168"
            height="84"
            type="right-thumbnail"
          />
          <BlogCard
            href="/blog/post/infographic-flexible-career-options-personality/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/10/20072927/Flexible-Career-Options-to-Match-Your-Personality-Type-353x177.jpg"
            name="Best Careers According to Your Myers-Briggs Personality Type"
            width="168"
            height="84"
            type="right-thumbnail"
          />
        </>
      </FlexLayout>
      <BlogTabs
        trendingCount={trendingCount}
        latestCount={latestCount}
        getActiveTab={activeTab}
      />
      <BlogFooter>
        <ButtonGroup
          name="More Posts"
          className="btn-primary"
          onToggle={loadMorePosts}
        />
        <ButtonGroup
          name="Back to Top"
          className="btn-primary"
          onToggle={backToTop}
        />
      </BlogFooter>
    </BlogWrap>
  );
};

export default Blog;
