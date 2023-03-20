import React from "react";
import Styled from "../../../styles/components/careerAdvice/CareerCoachingHeaderContent.styled.js";

const CareerCoachingHeaderContent = (props) => {
    return (
        <>
            <Styled.Heading>
                {props.text}
                {props.textEmphasized &&
                    <Styled.Emphasized>
                        {props.textEmphasized}
                    </Styled.Emphasized>
                }
            </Styled.Heading>
            <Styled.Content>
                <Styled.P>
                    <Styled.Bold>Talk through your job search and career questions with a FlexJobs career coach who can offer guidance and help get your job search on the right track.</Styled.Bold>
                </Styled.P>
                <Styled.P>
                    <Styled.Bold>Here's what you'll receive:</Styled.Bold>
                </Styled.P>

                <Styled.Ul>
                    <Styled.Li>One 30-minute phone or video session with your coach</Styled.Li>
                    <Styled.Li>A high-level screening of your existing resume, where your coach will provide pointers for you to make improvements</Styled.Li>
                    <Styled.Li>A customized post-call recap report with more resources</Styled.Li>
                </Styled.Ul>

                <Styled.P>
                    <Styled.Bold>Wish you could talk through your job search and career questions with someone?</Styled.Bold> FlexJobs wants you to have access to expert Career Coaching at a deep discount. Our coaches can answer your questions, offer guidance, and help you get your search on the right track. We offer Career Coaching at a reduced rate because we want to provide our users with a more reasonably priced option to help you find a better job faster!
                </Styled.P>

            </Styled.Content>
        </>
    );
};

export default CareerCoachingHeaderContent;
