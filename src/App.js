import React from "react";
import Breadcrumb from "./components/common/Breadcrumb";
import Login from "./components/common/Login";
import { StyledContainerMd } from "../styles/components/common/Common.styles";
import Layout from "./components/layout/Layout"

const App = () => {
    return (
        <Layout>
            <StyledContainerMd layout>
                {/* <Breadcrumb/> */}                
                <Login/>
            </StyledContainerMd>
        </Layout>
    )
}

export default App;