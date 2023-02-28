import React from "react";
import {MainHeading, CountHeading} from "../../../styles/components/common/SearchHeader.styles.js";

const SearchHeader = (props) => {
    return (
        <>
            <MainHeading>Job Search Results
                <i className='fa fa-info-circle'></i>
            </MainHeading>
            <CountHeading>
            1 to 50 of 10,682 for "manager"
            </CountHeading>
        </>
    )
}

export default SearchHeader;