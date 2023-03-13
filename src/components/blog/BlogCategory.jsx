import React from "react";
import BlogCard from "./BlogCard";
import BlogSearch from "./BlogSearch";
import Pagination from "../common/Pagination";
import RelatedCategoryList from "./RelatedCategoryList";
import RelatedCategoriesBadge from "./RelatedCategoriesBadge";
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
          <RelatedCategoriesBadge />
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
