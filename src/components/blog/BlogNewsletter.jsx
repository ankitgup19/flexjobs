import React from "react";
import styled from "styled-components";
import { LinkBtn } from "../../../styles/components/common/Common.styles.js";

const BlogNewsletter = () => {

  return (
    <>
      <P>Get new job postings, the latest job search tips, trends, news, and exclusive promotions!</P>
      <LinkBtn href="/newsletters" fWeight='500'>Sign Up Today!</LinkBtn>
    </>
  )
}

export default BlogNewsletter;

const P = styled.p`
  text-align: center;
`;