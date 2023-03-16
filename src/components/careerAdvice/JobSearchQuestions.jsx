import React from "react";
import Styled from "../../../styles/components/careerAdvice/JobSearchQuestions.styled";

const JobSearchQuestions = () => {
  return (
    <Styled.Wrapper>
      <h2>Featured Questions</h2>
      <Styled.InnerWrap>
        <Styled.QuestionWrap>
          <a href="/job-search-career-advice/what_are_the_current_trends_in_the_remote_job_market">
            What are the current trends in the remote job market?
          </a>
        </Styled.QuestionWrap>
        <Styled.QuestionWrap>
          <a href="/job-search-career-advice/where_can_i_find_flexjobs_job_search_advice_videos_and_webinar_recordings">
            Where can I find FlexJobs' job search advice videos and webinar
            recordings?
          </a>
        </Styled.QuestionWrap>
        <Styled.QuestionWrap>
          <a href="/job-search-career-advice/i_want_to_change_careers_but_dont_know_what_id_like_to_do_how_can_i_figure_that_out">
            I want to change careers but don't know what I'd like to do. How can
            I figure that out?
          </a>
        </Styled.QuestionWrap>
      </Styled.InnerWrap>
    </Styled.Wrapper>
  );
};

export default JobSearchQuestions;
