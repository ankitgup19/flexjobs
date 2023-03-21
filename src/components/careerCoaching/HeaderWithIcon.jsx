import React from "react";
import Styled from "../../../styles/components/careerAdvice/HeaderWithIcon.styled.js";

const CareerCoachingHeaderContent = (props) => {
    return (
        <Styled.Heading src={props.src}>
            {props.text}
        </Styled.Heading>
    );
};

export default CareerCoachingHeaderContent;
