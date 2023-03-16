import React from "react";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import PasswordRecovery from "./components/common/PasswordRecovery";
import Layout from "./components/layout/Layout";
import SearchResult from "./components/searchResult/SearchResult";
import { StyledContainerMd } from "../styles/components/common/Common.styles";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import BlogCategory from "./components/blog/BlogCategory";
import JobSearch from "./components/careerAdvice/JobSearch";
const App = () => {
    return (
        <Layout>
            <StyledContainerMd layout>
                <JobSearch />
                <center>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page Blog Category</h1>
                </center>
                <BlogCategory />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page Blog Post</h1>
                </center>
                <BlogPost />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page Blog</h1>
                </center>
                <Blog />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page Login</h1>
                </center>
                <Login />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page Signup</h1>
                </center>
                <SignUp />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page Password Recovery</h1>
                </center>
                <PasswordRecovery />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page Search Result</h1>
                </center>
                <SearchResult />
            </StyledContainerMd>
        </Layout>
    )
}

export default App;