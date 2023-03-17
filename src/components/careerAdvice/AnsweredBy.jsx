import React from "react";
import Styled from "../../../styles/components/careerAdvice/AnsweredBy.styled.js";

const AnsweredBy = (props) => {
    return (
        <Styled.AnsweredBy>
            <Styled.Photo src="https://www.flexjobs.com/images/team/brie.jpg" alt="Brie Reynolds" title="Brie Reynolds" />
            <Styled.Text>
                Answered by: Brie Reynolds, Career Development Manager and Coach
            </Styled.Text>
        </Styled.AnsweredBy>
    );
};

export default AnsweredBy;
