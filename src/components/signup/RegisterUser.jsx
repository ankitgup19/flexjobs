import React from "react";
import FormGroup from "../common/FormGroup";
import FormCheck from "../common/FormCheck";
import SunImg from "../../../styles/images/icon-sun.svg";

import { StyledFormWrap, SubHeading, SignUpBtn, FormFooterWrap, EmployerLink } from "../../../styles/components/common/SignUp.styles"

const RegisterUser = () => {
    return (
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
                <FormCheck key="termprivacy" type="checkbox" label={["I agree to the ",<a className="linked-url" href="/PrivacyPolicy.aspx" target="_blank">PRIVACY POLICY</a>," and ",<a className="linked-url" href="/termsOfUse.aspx" target="_blank">TERMS OF USE</a>,"."]}/>
                <FormFooterWrap>
                    <SignUpBtn type="submit">Sign Up Today!</SignUpBtn>
                    <EmployerLink href="/Members/Employers/Register.aspx">Employer? Register on the Employer side</EmployerLink>
                </FormFooterWrap>
            </form>
                </StyledFormWrap>
    )
}

export default RegisterUser;