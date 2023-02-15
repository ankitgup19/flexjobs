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
import { socialIconsSidebar } from "../../../../helper/Common";

import { MbNavItemsDiv } from "../../../../../styles/components/header/mobileNav.style";
import { SocialIconsUl } from "../../../../../styles/components/common/socialIcons.styles";

const nav = [Login, RemoteJobs, About, CareerAdvice, EventsWebinars, ArticleTips, MoreItems];

const MobileNavItems = () => {
    const handleSubMenu = (e) => {
        let parentElem = e.target.parentNode;
        if(parentElem.getAttribute("class") == "showMenu"){
            parentElem.setAttribute('class', 'hideMenu');
        }else{
            document.querySelectorAll('.menu > li:not(.noChild)').forEach(function(i){
                i.setAttribute('class', 'hideMenu');
            });
            parentElem.setAttribute('class', 'showMenu');
            if(parentElem.parentNode.parentNode.getAttribute("class") == "hideMenu") parentElem.parentNode.parentNode.setAttribute('class', 'showMenu');
        }
    }

    const generateMbNav = (nav, children) => {
        let topClassName = (children) ? 'submenu': 'menu';
        let navLength = (nav.length > 6) ? "multiCol" : null
        return (
            <ul className={[topClassName,navLength].join(" ")}>
                {   
                    nav.map(item => (
                        <li className={(!item.children) ? "noChild" : null}
                            >
                            {!children && <span onClick = {(e)=>handleSubMenu(e)}>{item.icon && <i className="prefixIcon">{item.icon}</i>}{item.name}</span>}
                            {children && item.children ? <span onClick = {(e)=>handleSubMenu(e)}>{item.name}</span> : null }
                            {children && !item.children && <a href={item.route}>{item.name}</a> }
                            {item.children && generateMbNav(item.children, true)}
                        </li>
                    ))
                }
            </ul>
        )
    }
    return (
        <MbNavItemsDiv>
            {generateMbNav(nav, false)}
            <SocialIconsUl>
                {
                    socialIconsSidebar.map(item => <SocialIcons theme={{color: "white"}} {...item}/>)
                }
            </SocialIconsUl>
            <Employer/>
        </MbNavItemsDiv>
    )
}

export default MobileNavItems;