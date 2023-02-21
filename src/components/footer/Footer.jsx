import React from "react";
import { FlexibleJobs, AboutFlexJobs, JobSearch } from "./FooterNavLinks";
import SocialIcons from "../common/SocialIcons";
import { socialIconsFooter } from "../../helper/Common";
import { StyledFooter, StyledWrap, StyledListWrap, StyledCopyrightWrap, StyledH5, EqDiv } from "../../../styles/components/footer/footer.styles";
import useMediaQuery from "../../helper/useMediaQuery";

import BrandLogo from "../header/BrandLogo";
import AcCredited from "../../../styles/images/online-arating-horizontal-blue.jpg"
import RemoteCoLogo from "../../../styles/images/remote-co-logo.svg";
import JobhuntLogo from "../../../styles/images/job-hunt-logo.svg";

const Footer = () => {
    const isMobileView = useMediaQuery("(max-width:1024px)")
    const footerNavLinks = [FlexibleJobs, AboutFlexJobs, JobSearch];
    const handleFooterNav = (elem) => {
        if(elem.target.parentNode.classList.contains("showNav")){
            elem.target.parentNode.setAttribute("class","col hideNav");
        }else{
            document.querySelectorAll("footer .col").forEach(function(e){
                e.setAttribute("class","col hideNav")
            })
            elem.target.parentNode.setAttribute("class","col showNav");
        }
    }
    const getChildNav = (nav) => {
        return (
            <StyledListWrap>
                {
                    nav.map(items => (
                        <li>
                            {items.name && <a href={items.route}>{items.name}</a>}
                            {items.children && getChildNav(items.children)}
                        </li>
                    ))
                }
            </StyledListWrap>
        )
    }
    const getFooterNav = (footerNavLinks) => {
        return (
            footerNavLinks.map(items => (
                <div className = "col">
                    <StyledH5 onClick={(e)=>handleFooterNav(e)}>{items.name}</StyledH5>
                    { items.children && getChildNav(items.children,true) }
                </div>
            ))
        )
    }
    return (
        <StyledFooter>
            {
                isMobileView ? 
                <a href="/" className="logoWrap">
                    <BrandLogo width={157} height={67}/>
                </a> 
                : null
            }
            <StyledWrap>
                { getFooterNav(footerNavLinks) }
            </StyledWrap>
            <StyledWrap>
                <EqDiv>
                    <StyledH5>Follow Us on</StyledH5>
                    <ul>
                        {
                            socialIconsFooter.map(item => <SocialIcons {...item}/>)
                        }
                    </ul>
                </EqDiv>
                <EqDiv>
                    <a href="https://www.bbb.org/us/co/boulder/profile/employment-agencies/flexjobs-1296-90091095/customer-reviews" rel="external nofollow" target="_blank" aria-label="link to verify BBB accreditation and to see a BBB report">
                        <img alt="FlexJobs BBB Business Review" width="190" src={AcCredited} title="BBB logo" class="img-fluid"/>
                    </a>
                </EqDiv>
                <EqDiv>
                    <StyledH5>Partner Sites</StyledH5>
                    <a href="https://remote.co/" rel="noopener" target="_blank" className="firstLogo">
                        <img src={RemoteCoLogo} width="110" height="21" alt="Remote.co" title="Remote.co logo"/>
                    </a>
                    <a href="https://www.job-hunt.org/" rel="noopener" target="_blank">
                        <img src={JobhuntLogo} width="70" height="35" alt="Job Hunt logo"/>
                    </a>
                </EqDiv>
            </StyledWrap>
            {
                isMobileView ?
                    <StyledCopyrightWrap>
                        <div className="mb-20">
                            <a href="/termsOfUse.aspx">Terms of Use</a>
                            &nbsp;|&nbsp;
                            <a href="/PrivacyPolicy.aspx">Privacy Policy</a>
                        </div>
                        <div>
                            <span className="mr-20">© 2007-2023 FlexJobs</span>
                            All Rights Reserved
                        </div>
                    </StyledCopyrightWrap>
                    : 
                    <StyledCopyrightWrap>
                        <a href="/termsOfUse.aspx">Terms of Use</a>
                        &nbsp;|&nbsp;
                        <a href="/PrivacyPolicy.aspx">Privacy Policy</a>
                        &nbsp;|&nbsp; 
                        <span>© 2007-2023  FlexJobs</span> All Rights Reserved
                    </StyledCopyrightWrap>
            }
        </StyledFooter>
    )
}

export default Footer;