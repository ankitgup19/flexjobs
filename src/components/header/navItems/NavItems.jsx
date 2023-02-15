import React from "react";

import UnAuthNavItems from "./UnAuthNavItems";
import AuthNav from "./AuthNav";

import About from "./subNavItems/About";
import RemoteJobs from "./subNavItems/RemoteJobs";
import CareerAdvice from "./subNavItems/CareerAdvice";
import EventsWebinars from "./subNavItems/EventsWebinars";
import Blog from "./subNavItems/Blog";

import { AUTH_USER } from "../../../helper/Common";

import { StyledNav, StyledUl, StyledA } from "../../../../styles/components/header/nav.styles";

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
            <StyledUl className='menu'>
                {
                    navigation.map(item => (
                        <li key={item.route}>
                            {!children && <StyledA href={item.route} onClick={(e)=>handleClick(e)}>{item.name}</StyledA>}
                            {item.children && generateSubNav(item.children, true)}
                        </li>
                    ))
                }
            </StyledUl>
        )
    }
    const generateSubNav = (subnav, child) => {
        return (
            <div className="submenuWrap">
                <ul className="submenu">
                    {
                        subnav.map(item => (
                            <li key={item.route}>
                                {child && <a href={item.route}>{item.name}</a>}
                                {item.children && generateNav(item.children, true)}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    return (
        <StyledNav>
            <div className="wrap">
                { generateNav(navigation, false) }
                { AUTH_USER ? <AuthNav/> : <UnAuthNavItems/> }
            </div>
        </StyledNav>
    )
}

export default NavMenu;