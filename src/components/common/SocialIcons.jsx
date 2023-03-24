import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIconA } from "../../../styles/components/common/socialIcons.styles";

const SocialIcons = (props) => {
    return (
        <li>
            <StyledIconA {...props} href={props.href} rel="noopener" title={"follow on " +props.title} target="_blank" className={"icon"+props.title}>
                {props.className && <FontAwesomeIcon icon={props.className}/>}
            </StyledIconA>
        </li>
    )
};

export default SocialIcons