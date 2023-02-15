import styled from "styled-components";

export const StyledContainerMd = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: ${({layout}) => layout ? "120px 15px 0" : "0 15px"};
    @media all and (max-width:1024px){
        padding: ${({layout}) => layout ? "135px 15px 0" : "0 15px"};
    }
`