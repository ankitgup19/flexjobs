import React from "react"
import { BreadcrumbUl } from "../../../styles/components/common/breadcrumb.styles";

const Breadcrumb = () => {
    return (
        <BreadcrumbUl>
            <li><a href="/">Home</a></li>
            <li><a href="/remote-jobs">Find Jobs</a></li>
            <li class="active">Job Listings </li>
        </BreadcrumbUl>
    )
}

export default Breadcrumb;