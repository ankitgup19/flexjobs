import React, { useState, useEffect } from "react";
import { MainHeading, CountSortWrap, CountHeading } from "../../../styles/components/common/SearchHeader.styles.js";
import RadioButtonGroup from "./RadioButtonGroup";
import Popover from "./Popover";

const SearchHeader = () => {
    const [popover, setPopover] = useState(false);
    const showPopover = () => {
        if (!popover) {
            setPopover(true);
        }
    }
    const hidePopover = (e) => {
        if (popover && !e.target.classList.contains('fa-info-circle')) {
            setPopover(false);
        }
    }
    useEffect(() => {
        if (popover) {            
            document.addEventListener("click", hidePopover);
        }
        else {
            document.removeEventListener("click", hidePopover);
        }
        return () => {
            document.removeEventListener("click", hidePopover);
        };
    });

    return (
        <>
            <MainHeading>Job Search Results
                <i className='fa fa-info-circle' onClick={showPopover}></i>{popover}
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