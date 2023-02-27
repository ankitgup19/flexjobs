import styled from "styled-components";

export const StyledContainerMd = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: ${({layout}) => layout ? "132px 15px 0" : "0 15px"};
    @media all and (max-width:1024px){
        padding: ${({layout}) => layout ? "135px 15px 0" : "0 15px"};
    }
`

export const MainWrap = styled.main`
    width: 75%;
`
export const AsideWrap = styled.aside`
    width: 25%;
`