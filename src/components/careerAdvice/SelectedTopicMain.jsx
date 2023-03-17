import React from "react";
import Styled from "../../../styles/components/careerAdvice/SelectedTopicMain.styled.js";

const SelectedTopicMain = (props) => {
    return (
        <Styled.Main>
            {props.children}
        </Styled.Main>
    );
};

export default SelectedTopicMain;
