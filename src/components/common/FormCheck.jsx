import React, { useState } from "react";

import { StyledFormCheck, InputCheck, Label} from "../../../styles/components/common/FormCheck.styles";

const FormCheck = (props) => {
    const [check, setCheck] = useState(false);
    return (
        <StyledFormCheck>
            <InputCheck type={props.type} onChange={()=>setCheck(!check)} value={check}/>
            {props.label && <Label>{props.label}</Label>}
        </StyledFormCheck>
    )
}

export default FormCheck
