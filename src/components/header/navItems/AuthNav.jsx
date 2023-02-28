import React from "react";

import { AUTH_USER_NAME } from "../../../helper/Common";

import { StyledUserWrap, StyledDropdownMenu } from "../../../../styles/components/header/nav.styles";

const AuthNav = () => {
    const showDropDownMenu = (e) => {
        e.target.classList.toggle("active");
    }
    return(
        <StyledUserWrap>   
            <a href="" className="dropdown" onClick={(e)=>showDropDownMenu(e)}>
                {AUTH_USER_NAME}</a>
            <StyledDropdownMenu id="dropdown-menu-member">
                <a href="/members/account">Account Details</a>
                <a href="/giftcertificates">Give a Gift Certificate</a>
                <a href="/members/account?tab=6">FAQs</a>
                <a href="/contact">Customer Support</a>
                <a href="/logout">Logout</a>
            </StyledDropdownMenu>
        </StyledUserWrap>
    )
}

export default AuthNav;