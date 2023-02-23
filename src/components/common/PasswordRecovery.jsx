import React from "react";
import Breadcrumb from "./Breadcrumb";
import FormGroup from "./FormGroup";
import { Styledform, LoginWrap, HeadingLogin, Heading, IconLogin, P, LoginBtn, AlertDanger, AlertDangerP } from "../../../styles/components/common/Login.styles";

const PasswordRecovery = (props) => {
    return (
        <Styledform action="" method="get" passwordRecovery>
            <Breadcrumb />
            <LoginWrap {...props}>
                <HeadingLogin>
                    <IconLogin src="https://www.flexjobs.com/images/icons/streamline-thin/icn-password-help.svg" alt="Password Help icon" title="Password Help icon" />
                    <Heading>Password Help</Heading>
                </HeadingLogin>
                <P>Please enter your email address below.<br/>We will send you a new password.</P>
                <FormGroup label='Email Address' type="text" id='emailId' />
                <AlertDanger>
                    <AlertDangerP><strong>Oops!</strong> Invalid email: You must provide an email</AlertDangerP>
                </AlertDanger>
                <LoginBtn type="submit">Send Email</LoginBtn>
            </LoginWrap>
        </Styledform>
    )
}

export default PasswordRecovery;