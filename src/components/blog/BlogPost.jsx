import React from "react";
import { FlexLayout } from "../layout/Layout";
import BlogImage from "./BlogImage";
import BlogHeader from "./BlogHeader";
import BlogDescription from "./BlogDescription";
import BlogSearch from "./BlogSearch";
import BlogPromo from "./BlogPromo";
import PromoBanner from "../common/PromoBanner";
import RelatedArticles from "./RelatedArticles";
import RelatedCategories from "./RelatedCategories";
import { BlogPostWrap } from "../../../styles/components/blog/BlogDescription.styles";

const BlogPost = () => {
  return (
    <FlexLayout filter>
      <BlogPostWrap>
        <div className="hero-wrap">
          <BlogImage
            width="1024"
            height="512"
            url="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/01/05134145/Top-100-Companies-to-Watch-for-Remote-Jobs-in-2023_2-1024x512.jpg"
          />
        </div>
        <BlogHeader
          title="Top 100 Companies to Watch for Remote Jobs in 2023"
          author="Jessica Howington"
          author_href="/blog/post/author/jessica-howington"
          author_post="Senior Content Manager
        "
        />
        <BlogDescription />
        <PromoBanner />
        <RelatedArticles />
        <RelatedCategories />
      </BlogPostWrap>
      <>
        <BlogSearch />
        <BlogPromo />
      </>
    </FlexLayout>
  );
};

export default BlogPost;
