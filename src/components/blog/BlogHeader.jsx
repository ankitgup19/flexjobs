import React from "react";
import { FlexLayout } from "../layout/Layout";
import { H1 } from "../../../styles/components/blog/BlogDescription.styles";
const BlogHeader = ({ title, author, author_href, author_post }) => {
  return (
    <div className="header-overlay">
      <H1>{title}</H1>
      <FlexLayout gridCol="50% auto">
        <span className="author-details">
          {"By "}
          <a href={author_href}>{author}</a>
          {", "}
          {author_post}
        </span>
        <>
          <span>Social Share</span>
        </>
      </FlexLayout>
    </div>
  );
};

export default BlogHeader;
