import React from "react";
import Styled from "../../../styles/components/careerAdvice/CareerAdviceHeader.styled";

const JobSearchHeader = (props) => {
  return (
    <Styled.CareerAdviceWrapper {...props}>
      {props.rightImgUrl && (
        <Styled.InnerWrapper {...props}>
          <Styled.ContentWrap>
            <h1>{props.heading}</h1>
            {props.description &&
              <p>{props.description}</p>
            }
          </Styled.ContentWrap>
        </Styled.InnerWrapper>
      )}
    </Styled.CareerAdviceWrapper>
  );
};

export default JobSearchHeader;
