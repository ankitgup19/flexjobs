import React from "react";
import Styled from "../../../styles/components/careerAdvice/CareerCoachingHeader.styled.js";

const CareerCoachingHeader = (props) => {
    return (
        <Styled.Heading>
            {props.text}
            {props.textEmphasized &&
                <Styled.Emphasized>
                    {props.textEmphasized}
                </Styled.Emphasized>
            }
        </Styled.Heading>
    );
};

export default CareerCoachingHeader;
