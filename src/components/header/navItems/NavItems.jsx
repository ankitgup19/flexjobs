import React from "react";

import UnAuthNavItems from "./UnAuthNavItems";
import AuthNav from "./AuthNav";

import About from "./subNavItems/About";
import RemoteJobs from "./subNavItems/RemoteJobs";
import CareerAdvice from "./subNavItems/CareerAdvice";
import EventsWebinars from "./subNavItems/EventsWebinars";
import Blog from "./subNavItems/Blog";

import { AUTH_USER } from "../../../helper/Common";

import { StyledNav, StyledWrap, StyledInnerWrap, StyledSubmenu, StyledSubmenuWrap, StyledLink } from "../../../../styles/components/header/nav.styles";

const navigation = [RemoteJobs, About, CareerAdvice, EventsWebinars, Blog];

const NavMenu = () => {

    function handleClick(e){
        document.querySelectorAll('.menu > li').forEach(function(i){
            if(i.childNodes.length > 1) i.childNodes[i.childNodes.length - 1].style.display = "none";
        });
        if(e.target.nextSibling) e.target.nextSibling.style.display = "block";
    }

    const generateNav = (navigation, children) => {
        return (
            <StyledInnerWrap className='menu'>
                {
                    navigation.map(item => (
                        <li key={item.route}>
                            {!children && <StyledLink href={item.route} onClick={(e)=>handleClick(e)}>{item.name}</StyledLink>}
                            {item.children && generateSubNav(item.children, true)}
                        </li>
                    ))
                }
            </StyledInnerWrap>
        )
    }
    const generateSubNav = (subnav, child) => {
        return (
            <StyledSubmenu>
                <StyledSubmenuWrap>
                    {
                        subnav.map(item => (
                            <li key={item.route}>
                                {child && <a href={item.route}>{item.name}</a>}
                                {item.children && generateNav(item.children, true)}
                            </li>
                        ))
                    }
                </StyledSubmenuWrap>
            </StyledSubmenu>
        )
    }
    return (
        <StyledNav>
            <StyledWrap>
                { generateNav(navigation, false) }
                { AUTH_USER ? <AuthNav/> : <UnAuthNavItems/> }
            </StyledWrap>
        </StyledNav>
    )
}

export default NavMenu;