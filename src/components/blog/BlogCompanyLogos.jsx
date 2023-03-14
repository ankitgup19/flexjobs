import React from "react";
import styled from "styled-components";

const BlogCompanyLogos = () => {

  return (
    <P>
      <a href="https://www.flexjobs.com/remote-jobs/company/cvs_health" target="_blank">
        <Img alt="CVS Health" src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2016/02/16120534/CVS-Health-Shrunk.jpeg" title="CVS Health" />
      </a>
      <a href="https://www.flexjobs.com/remote-jobs/company/kforce" target="_blank">
        <Img alt="Kforce" src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/06/28085038/kforce-shrunk.png" title="Kforce" />
      </a>
      <br />
      <a href="https://www.flexjobs.com/remote-jobs/company/great_assistant" target="_blank">
        <Img alt="Great Assistant" src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/09/26105220/great-assistant-shrunk.jpeg" title="Great Assistant" />
      </a>
      <a href="https://www.flexjobs.com/remote-jobs/company/vituity" target="_blank">
        <Img alt="Vituity" src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/02/28134107/Vituity-Shrunk.jpeg" title="Vituity" />
      </a>
    </P>
  )
}

export default BlogCompanyLogos;

const P = styled.p`
  text-align: center;
`;
const Img = styled.img`
  width: 75px;
  height: 75px;
  margin: 0.8rem;
`;