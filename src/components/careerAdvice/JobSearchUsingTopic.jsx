import React from "react";
import Styled from "../../../styles/components/careerAdvice/JobSearchUsingTopic.styled";

const JobSearchUsingTopic = () => {
  return (
    <Styled.Wrapper>
      <h2>Browse by Selected Topics</h2>
      <Styled.InnerWrap>
        <a href="/job-search-career-advice/career_coaching">Career Coaching</a>
        <a href="/job-search-career-advice/company_culture">Company Culture</a>
        <a href="/job-search-career-advice/cover_letter">Cover Letter</a>
        <a href="/job-search-career-advice/general_job_search">
          General Job Search
        </a>
        <a href="/job-search-career-advice/interview">Interview</a>
        <a href="/job-search-career-advice/job_application">Job Application</a>
        <a href="/job-search-career-advice/negotiation">Negotiation</a>
        <a href="/job-search-career-advice/management_skills">
          Management Skills
        </a>
        <a href="/job-search-career-advice/networking">Networking</a>
        <a href="/job-search-career-advice/productivity">Productivity</a>
        <a href="/job-search-career-advice/resume">Resume</a>
        <a href="/job-search-career-advice/social_media">Social Media</a>
        <a href="/job-search-career-advice/using_flexjobs">Using FlexJobs</a>
        <a href="/job-search-career-advice/career_gap">Career Gap</a>
        <a href="/job-search-career-advice/covid19">COVID19</a>
      </Styled.InnerWrap>
    </Styled.Wrapper>
  );
};

export default JobSearchUsingTopic;
