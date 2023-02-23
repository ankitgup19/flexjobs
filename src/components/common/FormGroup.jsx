import React, { useState, useEffect } from "react";
import { StyleFormGroup, Label, Input, IcnPwMask } from "../../../styles/components/common/FormGroup.styles";

const FormGroup = (props) => {
    const [input, setInput] = useState('');
    const [inputType, setInputType] = useState(props.type);
    const [mask, setMask] = useState(true);
    const toggleMask = () => {
        setMask(!mask);
    };
    useEffect(() => {       
        props.hasPwMask && setInputType(mask ? 'password' : 'text');
    });
    return (
        <StyleFormGroup>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input type={inputType} onChange={(e) => setInput(e.target.value)} value={input} id={props.id} />
            {props.hasPwMask &&
                <IcnPwMask className={`fa ${mask} ${mask ? 'fa-eye' : 'fa-eye-slash'}`} onClick={toggleMask} />
            }
        </StyleFormGroup>
    )
}

export default FormGroup;