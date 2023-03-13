import React from "react";

import UnAuthNavItems from "./UnAuthNavItems";
import AuthNav from "./AuthNav";

import About from "./subNavItems/About";
import RemoteJobs from "./subNavItems/RemoteJobs";
import CareerAdvice from "./subNavItems/CareerAdvice";
import EventsWebinars from "./subNavItems/EventsWebinars";
import Blog from "./subNavItems/Blog";

import { AUTH_USER } from "../../../helper/Common";
import { StyledContainerMd } from "../../../../styles/components/common/Common.styles";
import {
  StyledNav,
  StyledWrap,
  StyledInnerWrap,
  StyledSubmenu,
  StyledSubmenuWrap,
  StyledLink,
} from "../../../../styles/components/header/nav.styles";

const navigation = [RemoteJobs, About, CareerAdvice, EventsWebinars, Blog];

const NavMenu = () => {
  function handleClick(e) {
    document.querySelectorAll(".menu > li").forEach((i) => {
      if (i.childNodes.length > 1)
        i.childNodes[i.childNodes.length - 1].style.display = "none";
      if (i.childNodes.length > 1) i.childNodes[0].classList.remove("active");
    });
    if (e.target.nextSibling) e.target.nextSibling.style.display = "block";
    if (e.target.nextSibling) e.target.classList.add("active");
  }

  const generateNav = (navigation, children) => {
    return (
      <StyledInnerWrap className="menu">
        {navigation.map((item, index) => (
          <li key={item.route + index}>
            {!children && (
              <StyledLink
                /* href={item.route} */ onClick={(e) => handleClick(e)}
              >
                {item.name}
              </StyledLink>
            )}
            {item.children && generateSubNav(item.children, true)}
          </li>
        ))}
      </StyledInnerWrap>
    );
  };
  const generateSubNav = (subnav, child) => {
    return (
      <StyledSubmenu>
        <StyledContainerMd fullwidth>
          <StyledSubmenuWrap>
            {subnav.map((item) => (
              <li key={item.route}>
                {child && <a href={item.route}>{item.name}</a>}
                {item.children && generateNav(item.children, true)}
              </li>
            ))}
          </StyledSubmenuWrap>
        </StyledContainerMd>
      </StyledSubmenu>
    );
  };
  return (
    <StyledNav>
      <StyledContainerMd fullwidth>
        <StyledWrap>
          {generateNav(navigation, false)}
          {AUTH_USER ? <AuthNav /> : <UnAuthNavItems />}
        </StyledWrap>
      </StyledContainerMd>
    </StyledNav>
  );
};

export default NavMenu;
