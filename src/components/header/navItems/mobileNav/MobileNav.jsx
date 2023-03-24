import React, { useState } from "react";
import { AUTH_USER } from "../../../../helper/Common";
import MobileNavItems from "./MobileNavItems";
import BrandLogo from "../../BrandLogo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear } from '@fortawesome/free-solid-svg-icons';
import { MbHeadWrap, NavButton, SignUpLink, SettingsLink } from "../../../../../styles/components/header/mobileNav.style";

const MobileNavItem = () => {
    const [mobileNav, isMobileNav] = useState(false);
    return (
        <MbHeadWrap>
            <NavButton className="toggleButton" onClick={() => isMobileNav(!mobileNav)}><FontAwesomeIcon icon={faBars}/></NavButton>
            <div className="logo">
                <a href="/" className="link">
                    <BrandLogo width={102} height={46}/>
                </a>
            </div>
            {
                AUTH_USER ? 
                <SettingsLink href="/members/account">
                    <FontAwesomeIcon icon={faGear}/>
                </SettingsLink> 
                : 
                <SignUpLink href="/">Sign Up</SignUpLink>
            }
            {
                mobileNav ? <MobileNavItems/> : null
            }
        </MbHeadWrap>
    )
};

export default MobileNavItem;