import styled from "styled-components";

export const StyledContainerMd = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: ${({layout}) => layout ? "132px 15px 0" : "0 15px"};
    @media all and (max-width:1024px){
        padding: ${({layout}) => layout ? "135px 15px 0" : "0 15px"};
    }
`

export const FeaturedWrap = styled.div`
    display: grid;
    grid-template-columns: ${props => props.blog ? "58.33% auto" : props.filter ? "75% auto" : "1fr 1fr"};
    .left,
    .right{
        padding: ${props => props.blog ? "0 12px" : ""};
    }
`