import React from "react"
import { StyledbcrumbWrap } from "../../../styles/components/common/Breadcrumb.styles";

const Breadcrumb = () => {
    return (
        <StyledbcrumbWrap>
            <li><a href="/">Home</a></li>
            <li><a href="/remote-jobs">Find Jobs</a></li>
            <li class="active">Job Listings </li>
        </StyledbcrumbWrap>
    )
}

export default Breadcrumb;