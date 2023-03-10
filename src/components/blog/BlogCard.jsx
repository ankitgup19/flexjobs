import React from "react";
import styled, { css } from "styled-components";

const BlogCard = (props) => {
  return (
    <CardWrap type={props.type}
      small={props.small}
      news={props.news}>
      <a href={props.href} className="img-link">
        <img
          className="card-img"
          src={props.img_url}
          width={props.width}
          height={props.height}
          alt={props.title}
        />
      </a>
      <div className="card-body">
        <h4 className="h4 title">
          <a href={props.href}>{props.name}</a>
        </h4>
        {props.description && <p>{props.description}</p>}
      </div>
    </CardWrap>
  );
};

export default BlogCard;

const CardWrap = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.type == "right-thumbnail" ? "row" : "column"};
  word-wrap: break-word;
  margin: ${(props) =>
    props.type == "right-thumbnail"
      ? "0 0 16px"
      : props.type == "blog-cat"
      ? "0 0 2rem"
      : "0"};
  align-items: center;
  box-shadow: ${(props) =>
    props.type == "rel-article" ? "0px 5px 8px 0px rgba(0,0,0,0.13)" : "none"};
  max-width: ${(props) => (props.type == "blog-cat" ? "400px" : null)};
  .img-link {
    display: inline-block;
    padding-right: ${(props) =>
      props.type == "right-thumbnail" ? "12px" : "0"};
    ${(props) =>
      !props.news &&
      css`
        width: ${(props) =>
          props.type == "right-thumbnail" ? "41.67%" : "100%"};
      `}
  }
  .card-img {
    height: auto;
    max-height: 318px;
    border-radius: ${(props) =>
      props.type == "right-thumbnail" ? "4px" : "4px 4px 0 0"};
    ${(props) =>
      !props.news &&
      css`
        width: 100%;
      `}
  }
  .card-body {
    border: ${(props) =>
      props.type == "right-thumbnail"
        ? "none"
        : props.type == "rel-article"
        ? "none"
        : "1px solid rgba(0,0,0,0.125)"};
    border-width: 0 1px 1px;
    padding: ${(props) =>
      props.type == "right-thumbnail"
        ? "0"
        : props.type == "rel-article"
        ? "16px 8px"
        : "0 16px 20px"};
    width: ${(props) => (props.type == "right-thumbnail" ? "58.33%" : "100%")};
    height: ${(props) => (props.type == "blog-cat" ? "100%" : null)};
    ${(props) =>
      props.news &&
      css`
        flex: 1 0 0;
      `}
    .h4 {
      font-weight: ${(props) => (props.small ? "400" : "500")};
      font-size: ${(props) =>
        props.small ? props.theme.fontSize.sm : props.theme.fontSize.md1};
      line-height: 22px;
      margin: ${(props) =>
        props.type == "right-thumbnail"
          ? 0
          : props.type == "rel-article"
          ? 0
          : "20px 0 12px"};
      a {
        color: ${(props) => props.theme.colors.primaryLight};
        text-decoration: none;
        &:hover {
          color: ${(props) => props.theme.colors.primaryDark};
          text-decoration: underline;
        }
      }
    }
  }
`;
