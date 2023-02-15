import React from "react";
import Breadcrumb from "./components/common/Breadcrumb";
import { StyledContainerMd } from "../styles/components/common/common.styles";
import Layout from "./components/layout/Layout"

const App = () => {
    return (
        <Layout>
            <StyledContainerMd layout>
                <Breadcrumb/>
            </StyledContainerMd>
        </Layout>
    )
}

export default App;