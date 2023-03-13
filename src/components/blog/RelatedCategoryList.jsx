import React from "react";
import styled from "styled-components";

const RelatedCategoryList = () => {
  return (
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
  );
};

export default RelatedCategoryList;

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
