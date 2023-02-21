import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import Variables from "../styles/Theme";
import App from "./App";

const Applayout = () => {
    return (
        <ThemeProvider theme={Variables}>
            <GlobalStyle/>
            <App/> 
        </ThemeProvider>
    )
    
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Applayout/>);