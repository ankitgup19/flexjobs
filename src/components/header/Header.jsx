import React from "react";

import Logo from "./Logo";
import NavItems from "./navItems/NavItems";
import MobileNavItem from "./navItems/mobileNav/MobileNav";
import Search from "../common/Search";
import StickyRibbon from "../common/StickyRibbon";
import useMediaQuery from "../../helper/useMediaQuery";

import {
  StyledHeader,
  SearchWrap,
} from "../../../styles/components/header/header.style";

const Header = (props) => {
  const isMobileView = useMediaQuery("(max-width:1024px)");
  return (
    <StyledHeader>
      {isMobileView ? (
        <>
          <StickyRibbon description="Save up to 50% with code SPRING through 3/27" />
          <MobileNavItem />
          <SearchWrap>
            <Search />
          </SearchWrap>
        </>
      ) : (
        <>
          <StickyRibbon
            description="Save up to 50% on a FlexJobs Membership with code SPRING through March
        27th"
          />
          <Logo {...props} />
          <NavItems />
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
