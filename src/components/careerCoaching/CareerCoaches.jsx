import React, { useState, useEffect } from "react";
import Coach from "./Coach";
import Styled from "../../../styles/components/careerCoaching/CareerCoaching.styled";
import PopupModal from "../common/PopupModal";

const CareerCoaches = () => {
  const [isActive, setIsActive] = useState(null);
  const handleClick = (e) => {
    if (isActive === e.target.title) {
      setIsActive(null);
    }
    setIsActive(e.target.title);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsActive(null);
    document.body.style.overflow = "auto";
  };
  return (
    <Styled.Wrapper>
      <img
        src="https://www.flexjobs.com/images/icons/streamline-bold/career-coaching.svg"
        width="45"
        height="45"
        alt="Career Coaching"
        className="headImg"
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
          handleClick={(e) => handleClick(e)}
        />
        {isActive == "Betsy Andrews" && (
          <PopupModal
            heading="Betsy Andrews, Team Lead and Career Coach"
            closeModal={closeModal}
            setIsActive={setIsActive}
            headBgColor="#004f6d"
            textColor="#fff"
          >
            <div className="modal-body">
              <ul>
                <li>
                  Experienced career practitioner delivering personalized
                  coaching and resume services to job seekers from a wide
                  variety of backgrounds and individual circumstances
                </li>
                <li>
                  A bachelor’s degree in social work and professional background
                  in social work, higher education, workforce development, and
                  employment services for persons with disabilities within
                  non-profit, for-profit, and governmental organizations
                </li>
              </ul>
              <p>
                What’s it like to work with Betsy? Here’s what her clients say:
              </p>
              <ul>
                <li>
                  “Betsy was very insightful, relatable, a good listener,
                  encouraging, and realistic! Our 30- minute session was very
                  pleasing, and FlexJobs is fortunate to have Betsy on staff.”
                </li>
                <li>
                  “The process of having Betsy as a resume coach was very
                  powerful for me. Not only is my resume a professional and
                  organized document, but I came away from the experience
                  learning a lot about myself. Her guided coaching and questions
                  showed me where I was an experienced candidate and how to
                  properly relate those skills to job postings.”
                </li>
              </ul>
            </div>
          </PopupModal>
        )}
        <Coach
          imgUrl="https://www.flexjobs.com/images/team/team-anne.jpg"
          width="288"
          height="288"
          name="Anne Alcorn"
          handleClick={(e) => handleClick(e)}
        />
        {isActive == "Anne Alcorn" && (
          <PopupModal
            heading="Anne Alcorn, Career Coach"
            closeModal={closeModal}
            setIsActive={setIsActive}
            headBgColor="#004f6d"
            textColor="#fff"
          >
            <div className="modal-body">
              <ul>
                <li>
                  Career specialist providing job seekers with support in all
                  aspects of the job search process including resume writing,
                  job searching, and interview preparation
                </li>
                <li>
                  Certified in multiple career assessments with experience
                  working in higher education and helping clients discover their
                  best-fit career
                </li>
              </ul>
              <p>
                What’s it like to work with Anne? Here’s what her clients say:
              </p>
              <ul>
                <li>
                  ”Anne was really helpful. I've been out of the workforce a
                  long time. She gave me guidance, things to consider, and next
                  steps, which makes the process feel less overwhelming.”
                </li>
                <li>
                  ”For the first time in many months, I now feel empowered and
                  excited about starting this job search process. Anne helped me
                  reframe and re-evaluate my previous experiences and had many
                  suggestions about how I could use my experiences in other
                  fields. She was very thoughtful and understanding.”
                </li>
              </ul>
            </div>
          </PopupModal>
        )}
        <Coach
          imgUrl="https://www.flexjobs.com/images/team/team-keith.jpg"
          width="288"
          height="288"
          name="Keith Spencer"
          handleClick={(e) => handleClick(e)}
        />
        {isActive == "Keith Spencer" && (
          <PopupModal
            heading="Keith Spencer, Career Coach"
            closeModal={closeModal}
            setIsActive={setIsActive}
            headBgColor="#004f6d"
            textColor="#fff"
          >
            <div className="modal-body">
              <ul>
                <li>
                  Master of Science in Education with extensive experience in
                  career coaching and counseling, primarily working with
                  students and professionals from a wide range of backgrounds in
                  a higher education setting
                </li>
                <li>
                  Dedicated to supporting job seekers through focusing on job
                  search strategies, effectively editing resumes and cover
                  letters, providing networking advice, and interview prep and
                  follow-up
                </li>
              </ul>
              <p>
                What’s it like to work with Keith? Here’s what his clients say:
              </p>
              <ul>
                <li>
                  ”I really appreciated the time that Keith took to go over my
                  resume and make suggestions based on our discussion. He took
                  the time to really listen to what I was trying to say and gave
                  me some great ideas on how to brand myself and tailor my
                  resume accordingly.”
                </li>
                <li>
                  ”Keith was warm, patient, and understanding and my meeting
                  with him helped me a lot to clear my fears. I am now more
                  confident than I felt before. Keith helped raise my hope; I am
                  sure I will land a job that I am looking for.”
                </li>
              </ul>
            </div>
          </PopupModal>
        )}
      </Styled.InnerWrap>
      <Styled.BottomWrap noMargin>
        <p>
          Get started with a{" "}
          <a href="/career-coaching-resume-review">
            one-on-one career coaching session, have your resume reviewed and
            updated, combine both services in a bundle, or do a mock job
            interview
          </a>
          !
        </p>
      </Styled.BottomWrap>
    </Styled.Wrapper>
  );
};

export default CareerCoaches;
