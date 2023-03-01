import React, {useState} from "react";
import {MainHeading, CountSortWrap, CountHeading} from "../../../styles/components/common/SearchHeader.styles.js";
import RadioButtonGroup from "./RadioButtonGroup";
import Popover from "./Popover";

const SearchHeader = (props) => {
    const [popover, setPopover] = useState(false);
    return (
        <>
            <MainHeading>Job Search Results
                <i className='fa fa-info-circle' onClick={() => setPopover(!popover)}></i>
                {popover && <Popover />}
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