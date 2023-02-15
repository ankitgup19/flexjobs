import React from "react";
import Search from "../common/Search";
import AdvancedSearch from "./AdvancedSearch";
import BrandLogo from "./BrandLogo";
import { StyledContainerMd } from "../../../styles/components/common/common.styles";
import { StyledA, StyledDiv, StyledWrap } from "../../../styles/components/header/logo.styles";

const Logo = (props) => {
    return (
        <StyledContainerMd>
            <StyledDiv>
                <StyledA href="/">
                    <BrandLogo width={133} height={60} className="logoImg"/>
                    Find a <span>Better</span> Way to Work
                </StyledA>
                {
                    props.v1 ? 
                        <StyledWrap>
                            <Search {...props}/>
                            <AdvancedSearch/>
                        </StyledWrap>: ""
                }
            </StyledDiv>
        </StyledContainerMd>
    )
}

export default Logo;