import React from "react";
import Styled from "../../../styles/components/careerAdvice/BackLink.styled.js";

const BackLink = (props) => {
    return (
        <Styled.BackLinkWrap>
            <Styled.BackLink href='/job-search-career-advice'>
                <i className="fa fa-angle-left"/>Back
            </Styled.BackLink>
        </Styled.BackLinkWrap>
    );
};

export default BackLink;
