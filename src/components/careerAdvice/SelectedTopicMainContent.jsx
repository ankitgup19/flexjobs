import React from "react";
import Styled from "../../../styles/components/careerAdvice/SelectedTopicMainContent.styled.js";

const SelectedTopicMainContent = (props) => {
    return (
        <Styled.MainContent>
            {props.children}
        </Styled.MainContent>
    );
};

export default SelectedTopicMainContent;
