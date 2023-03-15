import React from "react";
import BlogCard from "./BlogCard";
import BlogSearch from "./BlogSearch";
import BlogPromo from "./BlogPromo";
import BlogSidebarWidgets from "./BlogSidebarWidgets";
import Pagination from "../common/Pagination";
import RelatedCategoryList from "./RelatedCategoryList";
import RelatedCategoriesBadge from "./RelatedCategoriesBadge";
import BlogFlexibleJobs from "./BlogFlexibleJobs";
import BlogRecommendedJobs from "./BlogRecommendedJobs";
import BlogNewsletter from "./BlogNewsletter";
import styled from "styled-components";
import { FlexLayout } from "../layout/Layout";
import { BLOG_ARTICLES } from "../../helper/Blogs";

const BlogCategory = () => {
  return (
    <div className="blog-category-wrap">
      <FlexLayout filter shadow padding>
        <>
          <CategoryH1>Find A Job</CategoryH1>
          <RelatedCategoryList />
          <BlogCatList>
            {BLOG_ARTICLES.data.map((blog) => (
              <BlogCard {...blog} name={blog.title} type="blog-cat" />
            ))}
          </BlogCatList>
          <Pagination />
        </>
        <>
          <BlogSearch />
          <BlogSidebarWidgets
            usedIn="sidebarBadge"
            text="Related Categories"
            iconSrc="https://www.flexjobs.com/images/icons/streamline-thin/streamline-icon-tags-edit.svg"
            iconTxt="Related Categories icon"
          >
            <RelatedCategoriesBadge usedIn="sidebarBadge" />
          </BlogSidebarWidgets>
          <BlogPromo />
          <BlogSidebarWidgets
            usedIn="sidebarBadge"
            text="Find a Flexible Job"
            iconSrc="https://www.flexjobs.com/images/icons/streamline-thin/streamline-icon-network-search.svg"
            iconTxt="Find a Flexible Job Icon"
          >
            <BlogSearch jobSearch />
            <BlogFlexibleJobs />
          </BlogSidebarWidgets>
          <BlogSidebarWidgets
            usedIn="sidebarBadge"
            text="Popular Remote Jobs"
            iconSrc="https://www.flexjobs.com/images/icons/streamline-thin/streamline-icon-popular-jobs.png"
            iconTxt="Popular Remote Jobs Icon"
            iconWidth="22"
          >
            <BlogFlexibleJobs />
          </BlogSidebarWidgets>
          <BlogSidebarWidgets
            text="Recommended Jobs"
            iconSrc="https://www.flexjobs.com/images/icons/streamline-thin/streamline-icon-briefcase-star.svg"
            iconTxt="Similar Jobs icon"
          >
            <BlogRecommendedJobs />
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
    </div>
  );
};

export default BlogCategory;

const CategoryH1 = styled.h1`
  font-size: 2.8rem;
  line-height: 3.4rem;
  margin: 0 0 1.6rem;
`;

const BlogCatList = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
