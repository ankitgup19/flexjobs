import React from "react";
import styled, { css } from "styled-components";

const BlogSideHeader = (props) => {
  return (
    <BlogSidebar center={props.center}>
      <BlogSidebarTitle>
        {props.iconSrc && (
          <BlogSideHeaderIcon
            src={props.iconSrc}
            width="25"
            alt={props.iconTxt}
            aria-hidden="true"
            title={props.iconTxt}
          />
        )}
        <BlogSideHeading center={props.center}>{props.text}</BlogSideHeading>
      </BlogSidebarTitle>
      {props.children}
    </BlogSidebar>
  );
};

export default BlogSideHeader;

const BlogSidebar = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 2px 1px 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.primary} #e1e8ef #e1e8ef;
  margin: 1.6rem 0 0;
  padding: 1.6rem 0 0;
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
`;

const BlogSidebarTitle = styled.header`
  display: flex;
  padding: 0 0.8rem;
`;

const BlogSideHeaderIcon = styled.img`
  margin: 0 1.3rem 1.2rem 0;
`;

const BlogSideHeading = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  margin: ${(props) => (props.center ? "0.8rem 0 2.4rem" : "0")};
`;
