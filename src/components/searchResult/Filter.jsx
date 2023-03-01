import React, { useState } from "react";
import ButtonGroup from "../common/ButtonGroup";
import { FILTER_OPTIONS } from "../../helper/Common";

import { FilterWrap } from "../../../styles/components/searchResults/Filters.styles";

const Filter = () => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if(clicked === index){
            return setClicked("0");
        }
        setClicked(index);
    }
    return (
        <FilterWrap>
            {
                FILTER_OPTIONS.map((item, index) => 
                <ButtonGroup
                    key={index} 
                    {...item} 
                    onToggle = {() => handleToggle(index)}
                    active = {clicked === index}
                />)
            }
        </FilterWrap>
    )
}

export default Filter;