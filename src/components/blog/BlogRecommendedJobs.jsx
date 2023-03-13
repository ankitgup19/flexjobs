import React from "react";
import { BlogRecommendedJobsUl, BlogRecommendedJobsLi, JobLink, JobTag, JobLocation, JobTagWrap, JobDate, JobDetail } from "../../../styles/components/common/BlogRecommendedJobs.style.js";
import { RECOMMENDED_JOBS } from "../../helper/Blogs.js";

const BlogRecommendedJobs = () => {

    return (
        <BlogRecommendedJobsUl>
            {RECOMMENDED_JOBS.map((item, index) => (
                <BlogRecommendedJobsLi key={index}>
                    <JobDetail>
                        <JobLink href={item.href}>{item.title}</JobLink>
                        <JobDate>{item.date}</JobDate>
                    </JobDetail>
                    <JobTagWrap>
                        {item.tag_list.map((tag, tagindex) => (
                            <JobTag key={tagindex}>{tag}</JobTag>
                        ))}
                    </JobTagWrap>
                    <JobLocation>
                        <i className="fa fa-map-marker-alt" title={item.icon_title} />
                        {item.location}
                    </JobLocation>
                </BlogRecommendedJobsLi>
            ))}
        </BlogRecommendedJobsUl>
    )
}

export default BlogRecommendedJobs;