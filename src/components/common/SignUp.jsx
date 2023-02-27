import React from "react";
import RegisterUser from "../signup/RegisterUser";
import Benefits from "../signup/Benefits";
import { StyledWrap, StyledMain, StyledAside, AsideInner, StyledLink, MainHeading, H2 } from "../../../styles/components/common/SignUp.styles";

const SignUp = () => {
    return (
        <StyledWrap>
            <StyledMain>
                <MainHeading>Discover a faster, safer, and easier way to find the best remote and flexible jobs!</MainHeading>
                <p><strong>FlexJobs is a game-changing resource if you are interested in a remote or flexible job!</strong></p>
                <p>As the leading, most trusted job service in these specialties, we offer many benefits to help <StyledLink target="_blank" href="/reviews-success-stories">our members find great jobs</StyledLink> faster, easier, and more safely! <StyledLink target="_blank" href="/Pricing.aspx">Full access starts at $9.95</StyledLink> and offers a Satisfaction Guarantee.</p>
                <RegisterUser/>
            </StyledMain>
            <StyledAside>
                <AsideInner>
                    <H2>
                        <strong>FlexJobs Benefits</strong>
                    </H2>
                    <Benefits/>
                </AsideInner>
            </StyledAside>
        </StyledWrap>
    )
}

export default SignUp