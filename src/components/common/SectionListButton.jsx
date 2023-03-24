import React from "react"
import s from "../../../styles/components/common/SectionListButton.styles.js";
import { LinkBtn } from "../../../styles/components/common/Common.styles.js";

const SectionListButton = () => {
    return (
        <s.SectionListButton>
            <s.P>Have questions about your job search? FlexJobs members have several great options for receiving career advice:</s.P>
            <s.Ol>
                <li>Search our Job Search and Career Advice Q&amp;A Library.</li>
                <li>Work one-on-one with a FlexJobs Career Coach.</li>
            </s.Ol>
            <s.LinkBtnWrap>                
                <LinkBtn primary fWeight='500' href="/job-search-career-advice">Search Career Advice Q&amp;A</LinkBtn>
            </s.LinkBtnWrap>
        </s.SectionListButton>
    )
};

export default SectionListButton;