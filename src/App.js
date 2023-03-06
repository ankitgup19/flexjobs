import React from "react";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import PasswordRecovery from "./components/common/PasswordRecovery";
import Layout from "./components/layout/Layout";
import SearchResult from "./components/searchResult/SearchResult";
import { StyledContainerMd } from "../styles/components/common/Common.styles";
import Blog from "./components/blog/Blog";
import BlogDescription from "./components/blog/BlogDescription";
const App = () => {
    return (
        <Layout>
            <StyledContainerMd layout>
                <Blog />
                <BlogDescription />
                <Login />
                <SignUp />
                <PasswordRecovery />
                <SearchResult />
                {/* <Blog/> */}
            </StyledContainerMd>
        </Layout>
    )
}

export default App;