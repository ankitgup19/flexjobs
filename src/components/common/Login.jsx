import React from "react";
import Breadcrumb from "./Breadcrumb";
import FormGroup from "./FormGroup";
import { Styledform, LoginWrap, HeadingLogin, Heading, IconLogin, P, ForgotPw, Link, LoginBtn } from "../../../styles/components/common/Login.styles";

const Login = (props) => {
    return (
        <Styledform action="" method="get">
            <Breadcrumb />
            <LoginWrap {...props}>
                <HeadingLogin>
                    <IconLogin src="https://www.flexjobs.com/images/icons/streamline-thin/icn-login.svg" alt="Welcome Back icon" title="Welcome Back icon" />
                    <Heading className="heading">Welcome Back!</Heading>
                </HeadingLogin>
                <P>Please log in below by entering the email address and password you created when you registered.</P>
                <FormGroup label='Email Address' type="text" id='emailId'/>
                <FormGroup label='Password' type="password" id='passwordId'/>
                <ForgotPw><Link href="">Forgot Password?</Link></ForgotPw>
                <LoginBtn type="submit">Log In</LoginBtn>
                <P>New to FlexJobs? <Link href="">Join now!</Link></P>
            </LoginWrap>
        </Styledform>
    )
}

export default Login;