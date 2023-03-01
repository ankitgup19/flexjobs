import React from "react";
import {MainHeading, CountSortWrap, CountHeading} from "../../../styles/components/common/SearchHeader.styles.js";
import RadioButtonGroup from "./RadioButtonGroup";

const SearchHeader = (props) => {
    return (
        <>
            <MainHeading>Job Search Results
                <i className='fa fa-info-circle'></i>
            </MainHeading>
            <CountSortWrap>
                <CountHeading>
                1 to 50 of 10,682 for "manager"
                </CountHeading>
                <RadioButtonGroup />
            </CountSortWrap>
        </>
    )
}

export default SearchHeader;