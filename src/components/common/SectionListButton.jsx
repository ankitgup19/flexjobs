import React from "react"
import Styled from "../../../styles/components/common/SectionListButton.styles.js";
import { LinkBtn } from "../../../styles/components/common/Common.styles.js";

const SectionListButton = () => {
    return (
        <Styled.SectionListButton>
            <Styled.P>Have questions about your job search? FlexJobs members have several great options for receiving career advice:</Styled.P>
            <Styled.Ol>
                <li>Search our Job Search and Career Advice Q&amp;A Library.</li>
                <li>Work one-on-one with a FlexJobs Career Coach.</li>
            </Styled.Ol>
            <Styled.LinkBtnWrap>                
                <LinkBtn primary fWeight='500' href="/job-search-career-advice">Search Career Advice Q&amp;A</LinkBtn>
            </Styled.LinkBtnWrap>
        </Styled.SectionListButton>
    )
};

export default SectionListButton;