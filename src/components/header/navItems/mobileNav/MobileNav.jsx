import React, { useState } from "react";
import { AUTH_USER } from "../../../../helper/Common";
import MobileNavItems from "./MobileNavItems";
import BrandLogo from "../../BrandLogo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MobileDiv, NavButton, SignUp } from "../../../../../styles/components/header/mobileNav.style";

const MobileNavItem = () => {
    const [mobileNav, isMobileNav] = useState(false);
    return (
        <MobileDiv>
            <NavButton className="toggleButton" onClick={() => isMobileNav(!mobileNav)}><FontAwesomeIcon icon={faBars}/></NavButton>
            <div className="logo">
                <a href="/">
                    <BrandLogo width={102} height={46}/>
                </a>
            </div>
            {
                AUTH_USER ? 
                <></> 
                : 
                <SignUp href="/">Sign Up</SignUp>
            }
            {
                mobileNav ? <MobileNavItems/> : null
            }
        </MobileDiv>
    )
}

export default MobileNavItem;