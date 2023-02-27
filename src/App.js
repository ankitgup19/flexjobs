import React from "react";
// import Breadcrumb from "./components/common/Breadcrumb";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import PasswordRecovery from "./components/common/PasswordRecovery";
import Layout from "./components/layout/Layout";
import SearchResult from "./components/searchResult/SearchResult";
import { StyledContainerMd } from "../styles/components/common/Common.styles";
const App = () => {
    return (
        <Layout>
            <StyledContainerMd layout>
                {/* <Breadcrumb/> */}                
                <Login/>
                <SignUp/>
                <PasswordRecovery/>
                <SearchResult/>
            </StyledContainerMd>
        </Layout>
    )
}

export default App;