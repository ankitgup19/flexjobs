import React from "react";
import { FlexLayout } from "../layout/Layout";
import {
  BlogDescWrap,
  H1,
} from "../../../styles/components/blog/BlogDescription.styles";

const BlogDescription = (props) => {
  return (
    <FlexLayout gridCol="60% auto">
      <BlogDescWrap>
        <div className="hero-wrap">
          <img
            width="1024"
            height="512"
            src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/01/05134145/Top-100-Companies-to-Watch-for-Remote-Jobs-in-2023_2-1024x512.jpg"
          ></img>
        </div>
        <div className="header-overlay">
          <H1>Top 100 Companies to Watch for Remote Jobs in 2023</H1>
        </div>
      </BlogDescWrap>
      <></>
    </FlexLayout>
  );
};

export default BlogDescription;
