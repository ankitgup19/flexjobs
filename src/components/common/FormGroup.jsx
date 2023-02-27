import React, { useState, useEffect } from "react";
import { StyleFormGroup, Label, Input, IcnPwMask } from "../../../styles/components/common/FormGroup.styles";

const FormGroup = (props) => {
    const [input, setInput] = useState('');
    const [inputType, setInputType] = useState(props.type);
    const [mask, setMask] = useState(true);
    const [pwLabel, setPwLabel] = useState("show");
    
    useEffect(() => {       
        props.hasPwMask && setInputType(mask ? 'password' : 'text');
        props.hasPwLabel && setPwLabel(mask ? 'show' : 'hide');
    },[mask]);

    return (
        <StyleFormGroup className={props.formGrpClass}>
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
            <Input type={inputType} onChange={(e) => setInput(e.target.value)} value={input} id={props.id} placeholder={props.placeholder}/>
            {props.hasPwMask &&
                <IcnPwMask className={props.hasPwLabel && "pwd-mask"} onClick={()=> setMask(!mask)}><i className={`fa ${mask ? 'fa-eye' : 'fa-eye-slash'}`}></i>{props.hasPwLabel && pwLabel}</IcnPwMask>
            }
        </StyleFormGroup>
    )
}

export default FormGroup;