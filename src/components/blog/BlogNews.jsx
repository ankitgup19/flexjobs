import React from "react";
import { BlogCardWrap } from "../../../styles/components/common/BlogCardList.style.js";
import BlogCard from "./BlogCard";

const BlogNews = () => {

    return (
        <BlogCardWrap news>
          <BlogCard
            href="/blog/post/common-job-search-scams-how-to-protect-yourself-v2/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2015/05/fortune-logo-100-shrunk1.png"
            name="16 Common Job Search Scams and How to Protect Yourself"
            width="64"
            height="64"
            type="right-thumbnail"
            small
            news
          />
          <BlogCard
            href="/blog/post/remote-flexible-companies-with-4-day-workweek/"
            img_url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/01/15085232/real-simple-100.jpg"
            name="24 Remote and Flexible Companies With a 4-Day Workweek"
            width="64"
            height="64"
            type="right-thumbnail"
            small
            news
          />
        </BlogCardWrap>
    )
}

export default BlogNews;