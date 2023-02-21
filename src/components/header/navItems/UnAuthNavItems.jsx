import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import { StyledInnerWrap, StyledLink } from "../../../../styles/components/header/nav.styles";


const UnAuthNavItems = () => {
    return(
        <StyledInnerWrap unAuth>
            <li><StyledLink icon href="/"><FontAwesomeIcon icon={faLightbulb}/></StyledLink></li>
            <li><StyledLink href="/">For Employers</StyledLink></li>
            <li><StyledLink href="/">Log In</StyledLink></li>
            <li><StyledLink button href="/">Sign Up</StyledLink></li>
        </StyledInnerWrap>
    )
}

export default UnAuthNavItems;