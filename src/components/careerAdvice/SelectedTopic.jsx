import React from "react";
import { FlexLayout } from "../layout/Layout";
import Breadcrumb from "../common/Breadcrumb";
import BackLink from "../common/BackLink.jsx";
import SelectedTopicHeader from "./SelectedTopicHeader.jsx";
import SelectedTopicMain from "./SelectedTopicMain.jsx";
import SelectedTopicMainContent from "./SelectedTopicMainContent.jsx";
import AnsweredBy from "./AnsweredBy.jsx";
import BlogPromo from "../blog/BlogPromo";
import BlogSidebarWidgets from "../blog/BlogSidebarWidgets";
import BlogTestimonialSlider from "../blog/BlogTestimonialSlider";
import BlogFooterLink from "../blog/BlogFooterLink";
import BlogNewsletter from "../blog/BlogNewsletter";
import RelatedCategoriesBadge from "../blog/RelatedCategoriesBadge";

const SelectedTopic = () => {
    return (
        <FlexLayout filter>
            <>
                <p style={{ margin: '0rem 0 0' }}>&nbsp;</p>
                <Breadcrumb />
                <SelectedTopicHeader
                    heading="Are most companies requiring people return to office work after the pandemic, or is remote work still an option?"
                />
                <SelectedTopicMain>
                    <SelectedTopicMainContent>
                        <AnsweredBy />
                        Dynamic Content
                        <RelatedCategoriesBadge heading/>
                    </SelectedTopicMainContent>
                    <BackLink/>
                </SelectedTopicMain>

            </>
            <>
                <BlogPromo />
                <BlogSidebarWidgets text="Success Stories Just In!" center>
                    <BlogTestimonialSlider />
                    <BlogFooterLink text="Read More Success Stories" extraSpacing />
                </BlogSidebarWidgets>
                <BlogSidebarWidgets
                    text="Weekly Newsletter"
                    center
                    iconSrc="https://www.flexjobs.com/images/icons/newletter-graphic.svg"
                    iconTxt="Weekly Newsletter icon"
                    iconWidth="64"
                    headerDirectionColumn
                >
                    <BlogNewsletter />
                </BlogSidebarWidgets>
            </>
        </FlexLayout>
    );
};

export default SelectedTopic;
