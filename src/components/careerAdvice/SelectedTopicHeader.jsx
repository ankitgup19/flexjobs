import React from "react";
import Styled from "../../../styles/components/careerAdvice/SelectedTopicHeader.styled.js";

const SelectedTopicHeader = (props) => {
    return (
        <Styled.Heading>
            {props.heading}
        </Styled.Heading>
    );
};

export default SelectedTopicHeader;
