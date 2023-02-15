import React from "react";
import { FlexibleJobs, AboutFlexJobs, JobSearch } from "./FooterNavLinks";
import SocialIcons from "../common/SocialIcons";
import { socialIconsFooter } from "../../helper/Common";
import { FooterStyle, EqDiv } from "../../../styles/components/footer/footer.styles";
import { StyledContainerMd } from "../../../styles/components/common/common.styles";
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
            <ul>
                {
                    nav.map(items => (
                        <li>
                            {items.name && <a href={items.route}>{items.name}</a>}
                            {items.children && getChildNav(items.children)}
                        </li>
                    ))
                }
            </ul>
        )
    }
    const getFooterNav = (footerNavLinks) => {
        return (
            footerNavLinks.map(items => (
                <div className = "col">
                <h5 onClick={(e)=>handleFooterNav(e)}>{items.name}</h5>
                { items.children && getChildNav(items.children,true) }
                </div>
            ))
        )
    }
    return (
        <FooterStyle>
            {
                isMobileView ? 
                <a href="/" className="logoWrap">
                    <BrandLogo width={157} height={67}/>
                </a> 
                : null
            }
            <StyledContainerMd>
            { getFooterNav(footerNavLinks) }
            </StyledContainerMd>
            <StyledContainerMd>
                <EqDiv>
                    <h5>Follow Us on</h5>
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
                    <h5>Partner Sites</h5>
                    <a href="https://remote.co/" rel="noopener" target="_blank" className="firstLogo">
                        <img src={RemoteCoLogo} width="110" height="21" alt="Remote.co" title="Remote.co logo"/>
                    </a>
                    <a href="https://www.job-hunt.org/" rel="noopener" target="_blank">
                        <img src={JobhuntLogo} width="70" height="35" alt="Job Hunt logo"/>
                    </a>
                </EqDiv>
            </StyledContainerMd>
            {
                isMobileView ?
                    <div className="copyrightText">
                        <div className="mb-20">
                            <a href="/termsOfUse.aspx">Terms of Use</a>
                            &nbsp;|&nbsp;
                            <a href="/PrivacyPolicy.aspx">Privacy Policy</a>
                        </div>
                        <div>
                            <span className="mr-20">© 2007-2023 FlexJobs</span>
                            All Rights Reserved
                        </div>
                    </div>
                    : 
                    <div className="copyrightText">
                        <a href="/termsOfUse.aspx">Terms of Use</a>
                        &nbsp;|&nbsp;
                        <a href="/PrivacyPolicy.aspx">Privacy Policy</a>
                        &nbsp;|&nbsp; 
                        <span>© 2007-2023  FlexJobs</span> All Rights Reserved
                    </div>
            }
        </FooterStyle>
    )
}

export default Footer;