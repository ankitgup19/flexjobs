import React, { useState } from "react";
import { RadioButtonGroupWrap, Radio, Label } from "../../../styles/components/common/RadioButtonGroup.styles.js";

const RadioButtonGroup = () => {
    const [sortOptions, setSortOptions] = useState('relsort');
    return (
        <>
            <RadioButtonGroupWrap role="group" aria-label="Basic radio toggle button group">
                <Label htmlFor="datesort" className={`${sortOptions == 'datesort' ? 'active' : ''}`} onClick={() => setSortOptions('datesort')}>
                    <Radio type="radio" sortOptionsname="sortOptions" id="datesort" autocomplete="off" defaultChecked />
                    Date
                </Label>
                <Label htmlFor="relsort" className={`${sortOptions == 'relsort' ? 'active' : ''}`} onClick={() => setSortOptions('relsort')}>
                    <Radio type="radio" sortOptionsname="sortOptions" id="relsort" autocomplete="off" />
                    Relevance
                </Label>
            </RadioButtonGroupWrap>
        </>
    )
}

export default RadioButtonGroup;