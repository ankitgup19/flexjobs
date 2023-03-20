import React from "react";
import Styled from "../../../styles/components/careerAdvice/CareerCoachingMain.styled.js";

const CareerCoachingMain = (props) => {
    return (
        <Styled.CareerCoachingMain>
            {props.children}
        </Styled.CareerCoachingMain>
    );
};

export default CareerCoachingMain;
