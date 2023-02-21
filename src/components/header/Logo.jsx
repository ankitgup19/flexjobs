import React from "react";
import Search from "../common/Search";
import AdvancedSearch from "./AdvancedSearch";
import BrandLogo from "./BrandLogo";
import { StyledContainerMd } from "../../../styles/components/common/common.styles";
import { StyledLink, StyledWrap } from "../../../styles/components/header/logo.styles";

const Logo = (props) => {
    return (
        <StyledContainerMd>
            <StyledWrap>
                <StyledLink href="/">
                    <BrandLogo width={133} height={60} className="logoImg"/>
                    Find a <span className="txt-orange">Better</span> Way to Work
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