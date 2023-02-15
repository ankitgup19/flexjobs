import React from "react";

import Logo from "./Logo"
import NavItems from "./navItems/NavItems";
import MobileNavItem from "./navItems/mobileNav/MobileNav";
import Search from "../common/Search";
import useMediaQuery from "../../helper/useMediaQuery";

import { StyledHeader, SearchWrap } from "../../../styles/components/header/header.style";

const Header = (props) => {
    const isMobileView = useMediaQuery("(max-width:1024px)")
    return (
        <StyledHeader>
            {
            isMobileView ? 
                <>
                    <MobileNavItem/>
                    <SearchWrap>
                        <Search/>
                    </SearchWrap>
                </>
            : 
                <>
                    <Logo {...props}/>
                    <NavItems/>
                </>
            }
        </StyledHeader>
    )
}

export default Header;