import React from "react";
import { BlogCardWrap } from "../../../styles/components/common/BlogCardList.style.js";
import BlogCard from "./BlogCard";

const BlogCardList = () => {

    return (
        <BlogCardWrap>
          <BlogCard
            href="/blog/post/common-job-search-scams-how-to-protect-yourself-v2/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/02/15050803/15-Common-Job-Search-Scams-and-How-to-Protect-Yourself-353x177.jpg"
            name="16 Common Job Search Scams and How to Protect Yourself"
            width="97"
            height="49"
            type="right-thumbnail"
            small
          />
          <BlogCard
            href="/blog/post/remote-flexible-companies-with-4-day-workweek/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/01/26043200/12-Remote-and-Flexible-Companies-With-a-4-Day-Workweek-353x177.jpg"
            name="24 Remote and Flexible Companies With a 4-Day Workweek"
            width="97"
            height="49"
            type="right-thumbnail"
            small
          />
          <BlogCard
            href="/blog/post/building-job-search-support-team/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/08/02070937/skills-for-resume-353x177.png"
            name="How to Build Your Job Search Support Team"
            width="97"
            height="49"
            type="right-thumbnail"
            small
          />
          <BlogCard
            href="/blog/post/infographic-flexible-career-options-personality/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/10/20072927/Flexible-Career-Options-to-Match-Your-Personality-Type-353x177.jpg"
            name="Best Careers According to Your Myers-Briggs Personality Type"
            width="97"
            height="49"
            type="right-thumbnail"
            small
          />
          <BlogCard
            href="/blog/post/common-job-search-scams-how-to-protect-yourself-v2/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/02/15050803/15-Common-Job-Search-Scams-and-How-to-Protect-Yourself-353x177.jpg"
            name="16 Common Job Search Scams and How to Protect Yourself"
            width="97"
            height="49"
            type="right-thumbnail"
            small
          />
          <BlogCard
            href="/blog/post/remote-flexible-companies-with-4-day-workweek/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/01/26043200/12-Remote-and-Flexible-Companies-With-a-4-Day-Workweek-353x177.jpg"
            name="24 Remote and Flexible Companies With a 4-Day Workweek"
            width="97"
            height="49"
            type="right-thumbnail"
            small
          />
        </BlogCardWrap>
    )
};

export default BlogCardList;