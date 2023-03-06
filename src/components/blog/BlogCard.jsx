import React from "react";
import styled from "styled-components";

const BlogCard = (props) => {
  return (
    <CardWrap className={props.className}>
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
    props.className == "right-thumbnail" ? "row" : "column"};
  word-wrap: break-word;
  margin: ${(props) =>
    props.className == "right-thumbnail" ? "0 0 16px" : "0"};
  align-items: center;
  .img-link {
    display: inline-block;
    width: ${(props) =>
      props.className == "right-thumbnail" ? "41.67%" : "100%"};
    padding-right: ${(props) =>
      props.className == "right-thumbnail" ? "12px" : "0"};
  }
  .card-img {
    width: 100%;
    height: auto;
    border-radius: ${(props) =>
      props.className == "right-thumbnail" ? "4px" : "4px 4px 0 0"};
  }
  .card-body {
    border: ${(props) =>
      props.className == "right-thumbnail"
        ? "none"
        : "1px solid rgba(0,0,0,0.125)"};
    border-width: 0 1px 1px;
    padding: ${(props) =>
      props.className == "right-thumbnail" ? "0" : "0 16px"};
    width: ${(props) =>
      props.className == "right-thumbnail" ? "58.33%" : "100%"};
    .h4 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin: ${(props) =>
        props.className == "right-thumbnail" ? 0 : "20px 0 12px"};
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
