import React from "react";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import PasswordRecovery from "./components/common/PasswordRecovery";
import Layout from "./components/layout/Layout";
import SearchResultWrapper from "./components/searchResult/SearchResultContainer";
// import SearchResultDetail from "./components/searchResult/SearchResultDetail";
import SearchOption from "./components/searchResult/SearchOption.jsx";
import { StyledContainerMd } from "../styles/components/common/Common.styles.js";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import BlogCategory from "./components/blog/BlogCategory";
import JobSearch from "./components/careerAdvice/JobSearch";
import SelectedTopic from "./components/careerAdvice/SelectedTopic.jsx";
import CareerCoaching from "./components/careerAdvice/CareerCoaching.jsx";
import CareerAdvice from "./components/careerAdvice/CareerAdvice.jsx";
const App = () => {
    return (
        <Layout>
            <StyledContainerMd layout>
                <SearchResultWrapper />
                {/* <SearchResultDetail /> */}
                <center>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Advanced Job Search</h1>
                </center>
                <SearchOption />
                <center>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Career Advice</h1>
                </center>
                <CareerAdvice />
                <center>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Career Coaching</h1>
                </center>
                <CareerCoaching />
                <center>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Job Search Career Advice</h1>
                </center>
                <JobSearch />
                <center>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Career Advice Selected Topic </h1>
                </center>
                <SelectedTopic />
                <center>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Blog Category</h1>
                </center>
                <BlogCategory />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Blog Post</h1>
                </center>
                <BlogPost />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Blog</h1>
                </center>
                <Blog />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Login</h1>
                </center>
                <Login />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Signup</h1>
                </center>
                <SignUp />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Password Recovery</h1>
                </center>
                <PasswordRecovery />
                <center>
                    <h1>&nbsp;</h1>
                    <h1 style={{ background: '#f1f9fe', padding: '2rem 0' }}>Page - Search Result</h1>
                </center>
                <SearchResultWrapper />                
            </StyledContainerMd>
        </Layout>
    )
}

export default App;