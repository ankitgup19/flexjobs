import React from "react";
import BlogCard from "./BlogCard";
import Pagination from "../common/Pagination";
import styled from "styled-components";
import { FlexLayout } from "../layout/Layout";
import { BLOG_ARTICLES } from "../../helper/Blogs";

const BlogCategory = () => {
  return (
    <div className="blog-category-wrap">
      <FlexLayout filter shadow padding>
        <>
          <CategoryH1>Find A Job</CategoryH1>
          <RelatedCatWrap>
            <span>Related: </span>
            <RelatedCatInner>
              <li>
                <RelatedCatLink href="/blog/category/find-job/avoiding-job-scams/">
                  Avoiding Job Scams
                </RelatedCatLink>
              </li>
              <li>
                <RelatedCatLink href="/blog/category/find-job/cover-letter-tips/">
                  Cover Letter Tips
                </RelatedCatLink>
              </li>
              <li>
                <RelatedCatLink href="/blog/category/find-job/job-interviewing-tips/">
                  Job Interviewing Tips
                </RelatedCatLink>
              </li>
              <li>
                <RelatedCatLink href="/blog/category/find-job/job-search-motivation/">
                  Job Search Motivation
                </RelatedCatLink>
              </li>
              <li>
                <RelatedCatLink href="/blog/category/find-job/job-search-tips/">
                  Job Search Tips
                </RelatedCatLink>
              </li>
            </RelatedCatInner>
          </RelatedCatWrap>
          <BlogCatList>
            {BLOG_ARTICLES.data.map((blog) => (
              <BlogCard {...blog} name={blog.title} type="blog-cat" />
            ))}
          </BlogCatList>
          <Pagination />
        </>
        <></>
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

const RelatedCatLink = styled.a`
  color: ${(props) => props.theme.colors.primaryLight};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
    text-decoration: underline;
  }
`;

const RelatedCatWrap = styled.div`
  margin: 0 0 2.4rem;
`;
const RelatedCatInner = styled.ul`
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
    &::after {
      content: "|";
      display: inline-block;
      margin: 0 0.4rem;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`;

const BlogCatList = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
