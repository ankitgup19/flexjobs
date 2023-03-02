import React, { useState } from "react";
import ButtonGroup from "../common/ButtonGroup";
import { FILTER_OPTIONS } from "../../helper/Common";

import { FilterWrap } from "../../../styles/components/searchResults/Filters.styles";

const Filter = () => {
    const [isActive, setIsActive] = useState(null);
    const handleToggle = (index) => {
        if(isActive === index){
            return setIsActive(null);
        }
        setIsActive(index);
    }

    return (
        <FilterWrap>
            {
                FILTER_OPTIONS.map((item, index) => 
                <ButtonGroup
                    key={index} 
                    {...item} 
                    onToggle = {() => handleToggle(index)}
                    active = {isActive === index}
                />)
            }
            <a href="" className="reset-filter">Clear</a>
        </FilterWrap>
    )
}

export default Filter;