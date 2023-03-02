import React from "react";
import Login from "./mobileSubNavItems/Login";
import RemoteJobs from "./mobileSubNavItems/RemoteJobs";
import About from "./mobileSubNavItems/About";
import CareerAdvice from "./mobileSubNavItems/CareerAdvice";
import EventsWebinars from "../subNavItems/EventsWebinars";
import ArticleTips from "./mobileSubNavItems/ArticleTips";
import MoreItems from "./mobileSubNavItems/MoreItems";
import SocialIcons from "../../../common/SocialIcons";
import Employer from "./Employer";
import { AUTH_USER } from "../../../../helper/Common";
import { socialIconsSidebar } from "../../../../helper/Common";

import { MbNavItemsWrap, StyledText, StyledLink } from "../../../../../styles/components/header/mobileNav.style";
import { SocialIconsUl } from "../../../../../styles/components/common/socialIcons.styles";

const loginNav = [Login]
const subNav = [RemoteJobs, About, CareerAdvice, EventsWebinars, ArticleTips, MoreItems];
let nav = [];

const MobileNavItems = () => {
    if(AUTH_USER){
        nav = subNav;
    }else{
        nav = loginNav.concat(subNav);
    }
    const handleSubMenu = (e) => {
        let parentElem = e.target.parentNode;
        if(parentElem.getAttribute("class") == "show-menu"){
            parentElem.setAttribute('class', 'hide-menu');
        }else{
            document.querySelectorAll('.menu > li:not(.no-child)').forEach((i) => {
                i.setAttribute('class', 'hide-menu');
            });
            parentElem.setAttribute('class', 'show-menu');
            if(parentElem.parentNode.parentNode.getAttribute("class") == "hide-menu") parentElem.parentNode.parentNode.setAttribute('class', 'show-menu');
        }
    }

    const generateMbNav = (nav, children) => {
        let topClassName = (children) ? 'submenu': 'menu';
        let navLength = (nav.length > 6) ? "multi-col" : null
        return (
            <ul className={[topClassName,navLength].join(" ")}>
                {   
                    nav.map(item => (
                        <li className={(!item.children) ? "no-child" : null}
                            >
                            {!children && <StyledText onClick = {(e)=>handleSubMenu(e)}>
                            {item.icon && <i className="prefix-icon">{item.icon}</i>}
                            {item.name}</StyledText>}
                            {children && item.children ? <StyledText childMenu onClick = {(e)=>handleSubMenu(e)}>{item.name}</StyledText> : null }
                            {children && !item.children && <StyledLink href={item.route}>{item.name}</StyledLink> }
                            {item.children && generateMbNav(item.children, true)}
                        </li>
                    ))
                }
            </ul>
        )
    }
    return (
        <MbNavItemsWrap>
            {generateMbNav(nav, false)}
            <SocialIconsUl>
                {
                    socialIconsSidebar.map((item, index) => <SocialIcons key={index} theme={{color: "white"}} {...item}/>)
                }
            </SocialIconsUl>
            {!AUTH_USER ? <Employer/> : null}
        </MbNavItemsWrap>
    )
}

export default MobileNavItems;