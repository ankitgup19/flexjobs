import React from "react";
import styled from "styled-components";

const BlogFlexibleJobs = () => {
  return (
    <FlexibleJobsList>
      <li>
        <a href="/jobs/new-hiring-now">View All New Jobs</a>
      </li>
      <li>
        <a href="/remote-jobs">Job Categories</a>
      </li>
      <li>
        <a href="/searchLocation">Find Jobs by Location</a>
      </li>
      <li>
        <a href="/jobs/featured">Featured Employer Jobs</a>
      </li>
      <li>
        <a href="/jobs/surprising-jobs">100 Surprising Jobs</a>
      </li>
      <li>
        <a href="/company-guide">Research Companies</a>
      </li>
    </FlexibleJobsList>
  );
};

export default BlogFlexibleJobs;

const FlexibleJobsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.6rem 0 1.2rem;
  a {
    display: block;
    padding: 0.8rem 2rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryLight};
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.colors.primaryDark};
    }
  }
`;
