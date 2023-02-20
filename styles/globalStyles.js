import { createGlobalStyle } from "styled-components";
import HalcyonRegular from "./fonts/halcyon-regular.otf";
import HalcyonBold from "./fonts/halcyon-bold.otf";
import HalcyonSemiBold from "./fonts/halcyon-semibold.otf";
import HalcyonMedium from "./fonts/halcyon-medium.otf";
import HalcyonRegularWoff from "./fonts/halcyon-regular-webfont.woff2";
import HalcyonBoldWoff from "./fonts/halcyon-bold-webfont.woff2";
import HalcyonSemiBoldWoff from "./fonts/halcyon-semibold-webfont.woff2";
import HalcyonMediumWoff from "./fonts/halcyon-medium-webfont.woff2";


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body,
    input{
        margin: 0;
        font-family: "halcyon-regular";
        width: 100%;
        font-size: ${props => props.theme.fontSize.sm};
        line-height: 2.2rem;
    }
    img{
        vertical-align: middle;
    }
    @font-face {
        font-family: 'halcyon-regular';
        src: url(${HalcyonRegularWoff}) format("woff2"), url(${HalcyonRegular});
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'halcyon-bold';
        src: url(${HalcyonBoldWoff}) format(woff2), url(${HalcyonBold});
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'halcyon-semibold';
        src: url(${HalcyonSemiBoldWoff}) format(woff2), url(${HalcyonSemiBold});
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'halcyon-medium';
        src: url(${HalcyonMediumWoff}) format(woff2), url(${HalcyonMedium});
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`

export default GlobalStyle;