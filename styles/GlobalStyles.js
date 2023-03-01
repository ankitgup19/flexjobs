import { createGlobalStyle } from "styled-components";
import HalcyonRegular from "./fonts/halcyon-regular.otf";
import HalcyonMedium from "./fonts/halcyon-medium.otf";
import HalcyonSemiBold from "./fonts/halcyon-semibold.otf";
import HalcyonBold from "./fonts/halcyon-bold.otf";
import HalcyonRegularWoff from "./fonts/halcyon-regular-webfont.woff2";
import HalcyonMediumWoff from "./fonts/halcyon-medium-webfont.woff2";
import HalcyonSemiBoldWoff from "./fonts/halcyon-semibold-webfont.woff2";
import HalcyonBoldWoff from "./fonts/halcyon-bold-webfont.woff2";


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body,
    button,
    input,
    select{
        font-family: "halcyon";
    }
    body,
    input[type='text'],
    input[type='password'],
    select{
        margin: 0;
        width: 100%;
        font-size: ${props => props.theme.fontSize.sm};
        line-height: 2.2rem;
        font-weight: 400;
    }
    p{
        margin: 0 0 1.2rem;
    }
    img{
        vertical-align: middle;
    }
    strong{
        font-weight: 600;
    }
    @font-face {
        font-family: 'halcyon';
        src: url(${HalcyonRegularWoff}) format("woff2"), url(${HalcyonRegular});
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'halcyon';
        src: url(${HalcyonMediumWoff}) format(woff2), url(${HalcyonMedium});
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'halcyon';
        src: url(${HalcyonSemiBoldWoff}) format(woff2), url(${HalcyonSemiBold});
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'halcyon';
        src: url(${HalcyonBoldWoff}) format(woff2), url(${HalcyonBold});
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`

export default GlobalStyle;