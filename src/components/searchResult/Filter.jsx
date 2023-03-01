import React from "react";
import ButtonGroup from "../common/ButtonGroup";
import { FILTER_OPTIONS } from "../../helper/Common";

import { FilterWrap } from "../../../styles/components/searchResults/Filters.styles";

const Filter = () => {
    return (
        <FilterWrap>
            {
                FILTER_OPTIONS.map((item) => <ButtonGroup {...item}/>)
            }
        </FilterWrap>
    )
}

export default Filter;