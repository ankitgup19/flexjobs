import React from "react"

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props) => {
    return(
        <>  
            <Header v1/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout;