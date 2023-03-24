import React from "react";
import FjLogo from "../../../styles/images/fj-logo.svg"

const BrandLogo = (props) => {
    return <img src={FjLogo} alt="Flex Jobs" width={props.width} height={props.height} className={props.className}/>
};

export default BrandLogo