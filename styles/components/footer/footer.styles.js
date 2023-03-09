import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.colors.tertiaryLight};
    @media all and (max-width:1024px){
        .logoWrap{
            display: flex;
            padding: 2.2rem 0;
            justify-content: center;
        }
    }
`
export const StyledListWrap = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li{
        margin-bottom: .8rem;
        a{
            color: ${props => props.theme.colors.tertiaryDarker};
            text-decoration: none;
            font-size: ${props => props.theme.fontSize.xs};
            line-height: 2.1rem;
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
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: 500;
`
export const StyledWrap = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    .col{
        padding: 2rem 0;
        h5{
            line-height: ${props => props.theme.lineHeight.lg};
            margin: 0 0 1.4rem;
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
                padding: 1.5rem 0;
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
                    padding: .7rem 0 1.5rem;
                    display: block;
                }
            }
        }
    }
`

export const StyledCopyrightWrap = styled.div`
    padding: 2.5rem 0;
    justify-content: center;
    text-align: center;
    font-size: ${props => props.theme.fontSize.xs};
    line-height: ${props => props.theme.lineHeight.md};
    .mb-20{
        margin-bottom: 2rem;
    }
    .mr-20{
        margin-right: 2rem;
    }
    a{
        color: ${props => props.theme.colors.primaryLight};
        text-decoration: none;
        &:hover{
            color: ${props => props.theme.colors.primaryDark};
            text-decoration: underline;
        }
    }
`

export const EqDiv = styled.div`
    margin: 2.5rem 0 0;
    width: 33.33%;
    text-align: center;
    h5{
        margin: 0 0 .8rem;
        text-align: center;
        line-height: ${props => props.theme.lineHeight.md};
    }  
    a{
        display: inline-block;
        &.firstLogo{
            margin-right: 2.5rem;
        }
    }      
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        justify-content: center;
        li{
            margin: 0 .5rem;
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