import React from "react";
import Coach from "./Coach";
import Styled from "../../../styles/components/careerCoaching/CareerCoaching.styled";

const CareerCoaches = () => {
  return (
    <Styled.Wrapper>
      <img
        src="https://www.flexjobs.com/images/icons/streamline-bold/career-coaching.svg"
        width="45"
        height="45"
        alt="Career Coaching"
      />
      <h2>Meet Our Career Coaches</h2>
      <p>
        The FlexJobs career coaching team is a seasoned group of career
        development professionals, each with an average of 10+ years of
        experience. Our objective is to provide coaching clients with
        personalized guidance, practical information, and resources to support
        their job search and career goals. We’ll help you understand how to
        present your unique abilities and situation in the best light to
        potential employers. And we’ll empower you to be confident in steering
        your own job search and career path.
      </p>
      <Styled.InnerWrap>
        <Coach
          imgUrl="https://www.flexjobs.com/images/team/team-betsy.jpg"
          width="288"
          height="288"
          name="Betsy Andrews"
        />
        <Coach
          imgUrl="https://www.flexjobs.com/images/team/team-anne.jpg"
          width="288"
          height="288"
          name="Anne Alcorn"
        />
        <Coach
          imgUrl="https://www.flexjobs.com/images/team/team-keith.jpg"
          width="288"
          height="288"
          name="Keith Spencer"
        />
      </Styled.InnerWrap>
    </Styled.Wrapper>
  );
};

export default CareerCoaches;
