import React from "react";
import { BlogSideHeadingWrap, BlogSideHeadingIcon } from "../../../styles/components/common/BlogSideHeading.style.js";

const BlogSideHeading = (props) => {

  return (
    <BlogSideHeadingWrap>
      <BlogSideHeadingIcon src="https://www.flexjobs.com/images/icons/streamline-thin/streamline-icon-briefcase-star.svg" width="25" alt="Similar Jobs icon" aria-hidden="true" title="Similar Jobs icon"/>
      {props.text}
    </BlogSideHeadingWrap>
  )
}

export default BlogSideHeading;