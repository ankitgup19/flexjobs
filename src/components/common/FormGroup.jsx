import React, { useState } from "react";
import { StyleFormGroup, Label, Input } from "../../../styles/components/common/FormGroup.styles";

const FormGroup = (props) => {
    const [input, setInput] = useState("");
    return (
        <StyleFormGroup className={props.formGrpClass}>
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
            <Input type={props.type} onChange={(e) => setInput(e.target.value)} value={input} id={props.id} placeholder={props.placeholder}/>
        </StyleFormGroup>
    )
}

export default FormGroup;