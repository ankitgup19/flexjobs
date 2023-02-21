import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #f5f5f5;
    @media all and (max-width:1024px){
        .logoWrap{
            display: flex;
            padding: 22px 0;
            justify-content: center;
        }
    }
`
export const StyledListWrap = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li{
        margin-bottom: 8px;
        a{
            color: #3E3D3F;
            text-decoration: none;
            font-size: 14px;
            line-height: 21px;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    @media all and (max-width:1024px){
        display: none;
    }
`
export const StyledH5 = styled.h5`
    font-size: 16px;
    font-weight: 500;
`
export const StyledWrap = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    .col{
        padding: 20px 0;
        h5{
            line-height: 24px;
            margin: 0 0 14px;
            color: #3d3e3f;
        }
    }
    @media all and (max-width:1024px){
        display: block;
        .col{
            border-top: 1px solid #b5b5b5;
            padding: 0;
            h5{
                margin: 0;
                padding: 15px 0;
                position: relative;
                &::after{
                    content: "";
                    width: 5px;
                    height: 5px;
                    display: inline-block;
                    border-color: #606470;
                    border-style: solid;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                    position: absolute;
                    right: 5px;
                    top: 20px;
                }
            }
            &.showNav{
                h5{
                    &::after{
                        border-width: 2px 0 0 2px;
                    }
                }
                ul{
                    padding: 7px 0 15px;
                    display: block;
                }
            }
        }
    }
`

export const StyledCopyrightWrap = styled.div`
    padding: 25px 0;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    .mb-20{
        margin-bottom: 20px;
    }
    .mr-20{
        margin-right: 20px;
    }
    a{
        color: #007CAD;
        text-decoration: none;
        &:hover{
            color: #23527c;
            text-decoration: underline;
        }
    }
`

export const EqDiv = styled.div`
    margin: 25px 0 0;
    width: 33.33%;
    text-align: center;
    h5{
        margin: 0 0 8px;
        text-align: center;
        line-height: 20px;
    }  
    a{
        display: inline-block;
        &.firstLogo{
            margin-right: 25px;
        }
    }      
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        justify-content: center;
        li{
            margin: 0 5px;
            a{
                font-size: 31px;
                display: inline-block;
                padding: 0;
                &.iconFacebook{
                    color: #1877f2;
                }
                &.iconLinkedIn{
                    color: #2867b2;
                }
                &.iconTwitter{
                    color: #00acee;
                }
                &.iconYouTube{
                    color: red;
                }
                &.iconPinterest{
                    color: #e60023;
                }
                &.iconInstagram{
                    color: #000;
                }
                &.iconReddit{
                    color: #FF4500;
                }
            }
        }
    }
    @media all and (max-width:1024px){
        width: 100%;
    }
`