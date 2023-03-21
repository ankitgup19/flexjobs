import React, { useEffect, useState } from "react";
import { REMOTE_JOBS } from "../../helper/Blogs";
import styled from "styled-components";

const RemoteJobs = () => {
  const [remoteJobs, setRemoteJobs] = useState(REMOTE_JOBS);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showMoreJobs, setShowMoreJobs] = useState(true);
  useEffect(() => {
    setRemoteJobs(REMOTE_JOBS.slice(0, 10));
  }, []);

  const showMore = (e) => {
    setRemoteJobs(REMOTE_JOBS);
    setShowMoreJobs(false);
    setShowAllJobs(true);
  };
  return (
    <>
      <RemoteJobsList>
        {remoteJobs.map((jobs) => (
          <li>
            <a href={jobs.href}>{jobs.title}</a>
          </li>
        ))}
      </RemoteJobsList>
      {showMoreJobs && (
        <SPAN
          data-bs-toggle="collapse"
          className="collapsed-links"
          onClick={showMore}
        >
          See More <i className="fa fa-angle-down" aria-hidden="true"></i>
        </SPAN>
      )}
      {showAllJobs && (
        <AllJobsWrap>
          <AllJobsLink href="/jobs/top-searched-remote-work-from-home-jobs">
            See All Jobs{" "}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </AllJobsLink>
        </AllJobsWrap>
      )}
    </>
  );
};

export default RemoteJobs;

const RemoteJobsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.6rem 0 0;
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

const SPAN = styled.span`
  text-align: center;
  font-weight: 600;
  margin: 0 0 1.2rem;
  color: ${props => props.theme.colors.primaryLight};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const AllJobsWrap = styled.div`
  text-align: center;
  margin: 0 0 1.2rem;
`;

const AllJobsLink = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.4rem 1.6rem;
  color: ${props => props.theme.colors.primaryLight};
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 0.4rem;
  font-weight: 600;
  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
    color: #fff;
  }
`;
