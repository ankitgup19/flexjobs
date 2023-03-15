import React from "react";
import styled, { css } from "styled-components";

const BlogSidebarWidget = (props) => {
  return (
    <BlogSidebar
      center={props.center}
      noBorderTop={props.noBorderTop}
      headerDirectionColumn={props.headerDirectionColumn}
    >
      {props.text && (
        <BlogSidebarTitle
          center={props.center}
          headerDirectionColumn={props.headerDirectionColumn}
          usedIn={props.usedIn}
        >
          {props.iconSrc && (
            <BlogSideHeaderIcon
              src={props.iconSrc}
              width={props.iconWidth || "25"}
              height={props.iconHeight || "26"}
              alt={props.iconTxt}
              aria-hidden="true"
              title={props.iconTxt}
              center={props.center}
            />
          )}
          {props.noBorderTop ? (
            <BlogSideSubHeading center={props.center}>
              {props.text}
            </BlogSideSubHeading>
          ) : (
            <BlogSideHeading
              center={props.center}
              headerDirectionColumn={props.headerDirectionColumn}
            >
              {props.text}
            </BlogSideHeading>
          )}
        </BlogSidebarTitle>
      )}
      {props.children}
    </BlogSidebar>
  );
};

export default BlogSidebarWidget;

const BlogSidebar = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 2px 1px 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.primary} #e1e8ef #e1e8ef;
  margin: ${(props) => (props.noBorderTop ? "0" : "1.6rem 0 0")};
  /* margin: ${(props) => (props.noBorderTop ? "0" : "2.7rem 0 0")}; */
  ${(props) =>
    props.headerDirectionColumn &&
    css`
      padding: 1.2rem;
    `}
  ${(props) =>
    !props.headerDirectionColumn &&
    css`
      padding: ${(props) => props.noBorderTop ? "1.6rem 0 .9rem" : "1.6rem 0 0"};
      /* padding: ${(props) => props.noBorderTop ? "1.6rem 0 .9rem" : "0"}; */
    `}
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.noBorderTop &&
    css`
      border-top: 0;
    `}
`;

const BlogSidebarTitle = styled.header`
  display: flex;
  margin: 0 0 1.2rem;
  padding: ${(props) =>
    props.usedIn == "sidebarBadge" ? "0 1.2rem" : "0 0.8rem"};
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.headerDirectionColumn &&
    css`
      flex-direction: column;
      align-items: center;
    `}
`;

const BlogSideHeaderIcon = styled.img`
  margin: ${(props) => (props.center ? "0 0 1.6rem" : "0 1.3rem 0 0")};
`;

const BlogSideHeading = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 2.6rem;
  margin: ${(props) => (props.center ? "0.8rem 0 2.4rem" : "0")};
  ${(props) =>
    props.headerDirectionColumn &&
    props.center &&
    css`
      margin: 0 0 0.8rem;
    `}
  ${(props) =>
    !props.headerDirectionColumn &&
    props.center &&
    css`
      margin: 0.8rem 0 2.4rem;
    `}
  ${(props) =>
    !props.center &&
    css`
      margin: 0;
    `}
`;
const BlogSideSubHeading = styled.h4`
  font-size: ${(props) => props.theme.fontSize.md1};
  margin: 1.6rem 0 0.4rem;
  color: #656565;
`;
