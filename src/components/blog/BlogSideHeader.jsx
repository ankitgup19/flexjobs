import React from "react";
import { BlogSideHeaderWrap, BlogSideHeaderIcon, BlogSideHeading } from "../../../styles/components/common/BlogSideHeader.style.js";

const BlogSideHeader = (props) => {

  return (
    <BlogSideHeaderWrap>
      <BlogSideHeaderIcon src={props.iconSrc} width="25" alt={props.iconTxt} aria-hidden="true" title={props.iconTxt}/>
      <BlogSideHeading>{props.text}</BlogSideHeading>
    </BlogSideHeaderWrap>
  )
}

export default BlogSideHeader;