import React from "react";
import styled from "styled-components";
import { HeadWrap, H2 } from "../../../styles/components/blog/Blog.styles";

const RelatedCategoriesBadge = (props) => {
  return (
    <RelatedCategoriesWrap usedIn={props.usedIn}>
      {props.heading && (
        <HeadWrap>
          <H2 className="h2">Related Categories</H2>
        </HeadWrap>
      )}
      <ul>
        <li>
          <a href="/blog/category/flexible-work-options/consulting-jobs/">
            Consulting Jobs
          </a>
        </li>
        <li>
          <a href="/blog/category/flexible-work-options/flexible-schedule-jobs/">
            Flexible Schedule Jobs
          </a>
        </li>
        <li>
          <a href="/blog/category/flexible-work-options/freelance-jobs/">
            Freelance Jobs
          </a>
        </li>
        <li>
          <a href="/blog/category/flexible-work-options/full-time-jobs/">
            Full-Time Jobs
          </a>
        </li>
        <li>
          <a href="/blog/category/flexible-work-options/part-time-job/">
            Part-Time Jobs
          </a>
        </li>
        <li>
          <a href="/blog/category/flexible-work-options/remote-jobs/">
            Remote Jobs
          </a>
        </li>
      </ul>
    </RelatedCategoriesWrap>
  );
};

export default RelatedCategoriesBadge;

const RelatedCategoriesWrap = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: ${(props) =>
      props.usedIn == "sidebarBadge" ? "0.8rem 1.2rem" : "0"};
    margin: 0;
    flex-wrap: wrap;
    gap: 4px;
    li {
      margin-bottom: 1.2rem;
    }
    a {
      display: inline-block;
      background: ${(props) =>
        props.usedIn == "sidebarBadge" ? "#cfe2ff" : "#f1f9fe"};
      font-weight: 500;
      padding: 0.4rem 1.6rem;
      text-transform: uppercase;
      color: ${(props) =>
        props.usedIn == "sidebarBadge" ? "#007CAD" : "#004f6d"};
      text-decoration: none;
      border-radius: 4px;
      &:hover {
        color: #004f6d;
        text-decoration: underline;
      }
    }
  }
`;
