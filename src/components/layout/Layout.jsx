import React from "react"
import Header from "../header/Header";
import Footer from "../footer/Footer";

import { MainWrap, AsideWrap } from "../../../styles/components/common/Common.styles";

const Layout = (props) => {
    return(
        <>  
            <Header v1/>
            {props.children}
            <Footer/>
        </>
    )
}

export const MainContainer = (props) => {
    return <MainWrap>{props.children}</MainWrap>
}

export const AsideContainer = (props) => {
    return <AsideWrap>{props.children}</AsideWrap>
}

export default Layout;