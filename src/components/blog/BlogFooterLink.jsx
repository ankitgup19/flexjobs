import React from "react";
import { FooterLink } from "../../../styles/components/common/BlogFooterLink.style.js";

const BlogFooterLink = (props) => {

  return (
    <FooterLink>
      {props.text}
      <i className="fas fa-angle-right" aria-hidden="true"/>
    </FooterLink>
  )
}

export default BlogFooterLink;