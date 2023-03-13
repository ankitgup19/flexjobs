import React from "react";
import { FooterLink } from "../../../styles/components/common/BlogFooterLink.style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogFooterLink = (props) => {

  return (
    <FooterLink>
      {props.text}
      <i className="fas fa-angle-right next" aria-hidden="true"/>
      <FontAwesomeIcon icon="fas fa-angle-right" />
    </FooterLink>
  )
}

export default BlogFooterLink;