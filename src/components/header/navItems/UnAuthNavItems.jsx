import React from "react";

import { StyledUl, StyledA } from "../../../../styles/components/header/nav.styles";


const UnAuthNavItems = () => {
    return(
        <StyledUl unAuth>
            <li><StyledA icon href="/"><i className="fa fa-solid fa-lightbulb"></i></StyledA></li>
            <li><StyledA href="/">For Employers</StyledA></li>
            <li><StyledA href="/">Log In</StyledA></li>
            <li><StyledA button href="/">Sign Up</StyledA></li>
        </StyledUl>
    )
}

export default UnAuthNavItems;