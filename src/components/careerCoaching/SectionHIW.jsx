import React from "react";
import BackToTop from "../common/BackToTop.jsx";
import Styled from "../../../styles/components/careerAdvice/SectionHIW.styled.js";

const SectionHIW = (props) => {
    return (
        <>
            <Styled.SectionHIW>
                {props.children}
                <Styled.P center>Your coach will partner and collaborate with you to offer advice and strategic resources that empower you in your job search. After your session, your coach will email you a report that recaps what was covered and includes additional resources. Our Career Coaching service is 100% confidential.</Styled.P>
                <Styled.StepBoxWrap>
                    <Styled.StepBox>
                        <Styled.StepBoxHeader>
                            <Styled.StepImg src="https://www.flexjobs.com/images/icons/streamline-bold/job-categories.svg" alt="Register for Coaching" aria-hidden="true" title="Register for Coaching" />
                            <Styled.StepHeading>Register for Coaching</Styled.StepHeading>
                        </Styled.StepBoxHeader>
                        <Styled.P>Purchase a 30-minute one-on-one Career Coaching session for $89 - up to 35% off typical career coaching rates. Your purchase includes one 30-minute session and a recap report with even more resources.</Styled.P>
                    </Styled.StepBox>
                    <Styled.StepArrow>
                        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </Styled.StepArrow>
                    <Styled.StepBox>
                        <Styled.StepBoxHeader>
                            <Styled.StepImg src="https://www.flexjobs.com/images/icons/streamline-bold/job-categories.svg" alt="Complete Intake Form" aria-hidden="true" title="Complete Intake Form" />
                            <Styled.StepHeading>Complete Intake Form</Styled.StepHeading>
                        </Styled.StepBoxHeader>
                        <Styled.P>After purchasing, you'll be emailed a confidential intake form. Fill in your answers as completely as possible to help your coach prepare for your session!</Styled.P>
                    </Styled.StepBox>
                    <Styled.StepArrow>
                        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </Styled.StepArrow>
                    <Styled.StepBox>
                        <Styled.StepBoxHeader>
                            <Styled.StepImg src="https://www.flexjobs.com/images/icons/streamline-bold/new-jobs.svg" alt="Schedule Your Session" aria-hidden="true" title="Schedule Your Session" />
                            <Styled.StepHeading>Schedule Your Session</Styled.StepHeading>
                        </Styled.StepBoxHeader>
                        <Styled.P>Submit your intake form and your coach will email you to schedule your session via Calendly and Zoom. Sessions are generally held Monday through Friday between 8:00 a.m. and 6:00 p.m. (Eastern Time).</Styled.P>
                    </Styled.StepBox>
                </Styled.StepBoxWrap>
            </Styled.SectionHIW>
            <BackToTop />
        </>
    );
};

export default SectionHIW;
