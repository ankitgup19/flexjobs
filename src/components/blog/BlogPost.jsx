import React from "react";
import { FlexLayout } from "../layout/Layout";
import BlogImage from "./BlogImage";
import BlogHeader from "./BlogHeader";
import BlogDescription from "./BlogDescription";
import BlogSearch from "./BlogSearch";
import BlogPromo from "./BlogPromo";
import BlogRecommendedJobs from "./BlogRecommendedJobs.jsx";
import BlogCardList from "./BlogCardList.jsx";
import BlogNews from "./BlogNews.jsx";
import BlogCompanyLogos from "./BlogCompanyLogos.jsx";
import BlogFooterLink from "./BlogFooterLink.jsx";
import BlogSidebarWidgets from "./BlogSidebarWidgets.jsx";
import BlogNewsletter from "./BlogNewsletter.jsx";
import PromoBanner from "../common/PromoBanner";
import RelatedArticles from "./RelatedArticles";
import RelatedCategoriesBadge from "./RelatedCategoriesBadge";
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
        <RelatedCategoriesBadge heading />
      </BlogPostWrap>
      <>
        <BlogSearch />
        <BlogPromo />
        <BlogSidebarWidgets
          text="Recommended Jobs"
          iconSrc="https://www.flexjobs.com/images/icons/streamline-thin/streamline-icon-briefcase-star.svg"
          iconTxt="Similar Jobs icon"
        >
          <BlogRecommendedJobs />
        </BlogSidebarWidgets>
        <BlogSidebarWidgets
          text="Trending Articles"
          iconSrc="https://www.flexjobs.com/images/icons/streamline-thin/streamline-icon-global-warming-globe-fire.svg"
          iconTxt="Trending Articles icon"
        >
          <BlogCardList />
        </BlogSidebarWidgets>
        <BlogSidebarWidgets text="FlexJobs in the News" center>
          <BlogNews />
          <BlogFooterLink text="More of This Week's News" />
        </BlogSidebarWidgets>
        <BlogSidebarWidgets noBorderTop text='Currently Hiring on FlexJobs' center>
          <BlogCompanyLogos />
          <BlogFooterLink text="See All New Jobs" />
        </BlogSidebarWidgets>
        <BlogSidebarWidgets
          text="Weekly Newsletter"
          center
          iconSrc="https://www.flexjobs.com/images/icons/newletter-graphic.svg"
          iconTxt="Weekly Newsletter icon"
          iconWidth='64'
          headerDirectionColumn
        >
          <BlogNewsletter />
        </BlogSidebarWidgets>
      </>
    </FlexLayout>
  );
};

export default BlogPost;
