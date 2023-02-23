import React from "react";
import FormGroup from "./FormGroup";
import FormCheck from "./FormCheck";
import SunImg from "../../../styles/images/icon-sun.svg";

import { StyledWrap, StyledMain, StyledAside, StyledLink, MainHeading, StyledFormWrap, SubHeading, SignUpBtn, FormFooterWrap, EmployerLink } from "../../../styles/components/common/SignUp.styles";

const SignUp = () => {
    return (
        <StyledWrap>
            <StyledMain>
                <MainHeading>Discover a faster, safer, and easier way to find the best remote and flexible jobs!</MainHeading>
                <p><strong>FlexJobs is a game-changing resource if you are interested in a remote or flexible job!</strong></p>
                <p>As the leading, most trusted job service in these specialties, we offer many benefits to help <StyledLink target="_blank" href="/reviews-success-stories">our members find great jobs</StyledLink> faster, easier, and more safely! <StyledLink target="_blank" href="/Pricing.aspx">Full access starts at $9.95</StyledLink> and offers a Satisfaction Guarantee.</p>
                <StyledFormWrap>
                    <form action="/">
                        <SubHeading>
                            <img src={SunImg} width="36" height="36"/>
                            Sign Up Today to Start Your Job Search!
                        </SubHeading>
                        <FormGroup id="firstName" type="text" placeholder="First Name" formGrpClass= "fieldGrp"/>
                        <FormGroup id="lastName" type="text" placeholder="Last Name" formGrpClass= "fieldGrp"/>
                        <FormGroup id="userEmail" type="text" placeholder="Email Address" formGrpClass= "fieldGrp"/>
                        <FormGroup id="confirmEmail" type="text" placeholder="Confirm Email" formGrpClass= "fieldGrp"/>
                        <FormGroup id="password" type="password" placeholder="Password" formGrpClass= "fieldGrp" hasPwMask hasPwLabel/>
                        <FormGroup id="aboutUs" type="text" label="How did you hear about FlexJobs?" formGrpClass= "fieldGrp"/>
                        <FormCheck type="checkbox" label={["I agree to the ",<a className="linked-url" href="/PrivacyPolicy.aspx" target="_blank">PRIVACY POLICY</a>," and ",<a className="linked-url" href="/termsOfUse.aspx" target="_blank">TERMS OF USE</a>,"."]}/>
                        <FormFooterWrap>
                            <SignUpBtn type="submit">Sign Up Today!</SignUpBtn>
                            <EmployerLink href="/Members/Employers/Register.aspx">Employer? Register on the Employer side</EmployerLink>
                        </FormFooterWrap>
                    </form>
                </StyledFormWrap>
            </StyledMain>
            <StyledAside></StyledAside>
        </StyledWrap>
    )
}

export default SignUp