import React, { Children } from "react"
import Header from "../header/Header";
import Footer from "../footer/Footer";

import { FeaturedWrap, RightSection } from "../../../styles/components/common/Common.styles";

const Layout = (props) => {
    return(
        <>  
            <Header v1/>
            {props.children}
            <Footer/>
        </>
    )
}

export const FlexLayout = (props) => {
    const [left, right] = Children.toArray(props.children);
    return (
        <FeaturedWrap {...props}>
            <div className="left">{left}</div>
            <RightSection className="right">{right}</RightSection>
        </FeaturedWrap>
    )
}

export default Layout;