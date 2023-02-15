import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import Variables from "../styles/variables";
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