import React from "react";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import PasswordRecovery from "./components/common/PasswordRecovery";
import Layout from "./components/layout/Layout";
import SearchResult from "./components/searchResult/SearchResult";
import { StyledContainerMd } from "../styles/components/common/Common.styles";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
const App = () => {
    return (
        <Layout>
<<<<<<< HEAD
            <StyledContainerMd layout>
                <Blog />
                <BlogPost />
=======
            <StyledContainerMd layout>                
                <BlogDescription />
                <Blog />
>>>>>>> 247137cdaa6af6e3e6d6b411db01e8e5f32d0d28
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