import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: #f5f5f5;
    > div{
        display: flex;
        justify-content: space-between;
        .col{
            padding: 20px 0;
            h5{
                font-size: ${props => props.theme.fontSize.sm};
                line-height: ${props => props.theme.lineHeight.lg};
                margin: 0 0 14px;
                color: #3d3e3f;
                font-family: 'halcyon-medium', "Helvetica Neue", Helvetica, Arial, sans-serif;
            }
            ul{
                margin: 0;
                padding: 0;
                list-style: none;
                li{
                    margin-bottom: 8px;
                    a{
                        color: #3E3D3F;
                        text-decoration: none;
                        font-size: ${props => props.theme.fontSize.xs};
                        line-height: 2.1rem;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        &.copyrightText{
            padding: 25px 0;
            justify-content: center;
            text-align: center;
            font-size: ${props => props.theme.fontSize.xs};
            line-height:${props => props.theme.lineHeight.md};
            .mb-20{
                margin-bottom: 20px;
            }
            .mr-20{
                margin-right: 20px;
            }
            a{
                color: ${props => props.theme.colors.primaryLight};
                text-decoration: none;
                &:hover{
                    color: ${props => props.theme.colors.primaryDark};
                    text-decoration: underline;
                }
            }
        }
    }
    @media all and (max-width:1024px){
        .logoWrap{
            display: flex;
            padding: 22px 0;
            justify-content: center;
        }
        > div{
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
                ul{
                    display: none;
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
    }
`

export const EqDiv = styled.div`
    margin: 25px 0 0;
    width: 33.33%;
    text-align: center;
    h5{
        font-size: ${props => props.theme.fontSize.sm};
        margin: 0 0 8px;
        text-align: center;
        line-height:${props => props.theme.lineHeight.md};
        font-family: 'halcyon-medium', "Helvetica Neue", Helvetica, Arial, sans-serif;
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
                font-size: 3.1rem;
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
                    color: ${props => props.theme.colors.black};
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