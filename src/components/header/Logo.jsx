import React from "react";
import Search from "../common/Search";
import AdvancedSearch from "./AdvancedSearch";
import BrandLogo from "./BrandLogo";
import { StyledContainerMd } from "../../../styles/components/common/Common.styles";
import { StyledLink, StyledWrap } from "../../../styles/components/header/Logo.styles";

const Logo = (props) => {
    return (
        <StyledContainerMd fullwidth = "true">
            <StyledWrap>
                <StyledLink href="/">
                    <BrandLogo width={133} height={60} className="logo-img"/>
                    Find a <span className="txt-highlight">Better</span> Way to Work
                </StyledLink>
                {
                    props.v1 ? 
                        <StyledWrap innerWrap>
                            <Search {...props}/>
                            <AdvancedSearch/>
                        </StyledWrap>: ""
                }
            </StyledWrap>
        </StyledContainerMd>
    )
}

export default Logo;