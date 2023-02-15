import styled from "styled-components";

export const MobileDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    align-items: center;
    .logo {
        flex-grow: 1;
        text-align: center;
        a{
            display: inline-block;
        }
    }
`

export const NavButton = styled.button`
    padding: 0;
    font-size: ${props => props.theme.fontSize.fs22};
    color: ${props => props.theme.colors.blue_1};
    border: none;
    background-color: transparent;
    text-align: left;
    width: 80px;
`

export const SignUp = styled.a`
    text-decoration: none;
    background-color: ${props => props.theme.colors.orange_1};
    border-radius: 4px;
    color: ${props => props.theme.colors.white};
    padding: 6px 12px;
`
export const MbNavItemsDiv = styled.div`
    background-color: ${props => props.theme.colors.blue_1};
    height: calc(100vh - 54px);
    overflow-y: auto;
    position: fixed;
    width: 100%;
    left: 0;
    top: 58px;
    color: #fff;
    padding: 5px 8px;
    .menu{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            border-bottom: 1px solid rgba(255,255,255,0.5);
            position: relative;
            > span{
                color: ${props => props.theme.colors.white};
                text-decoration: none;
                padding: 12px 8px;
                display: block;
                .prefixIcon{
                    margin-right: 7px;
                    position: relative;
                    bottom: -2px;
                }
            }
            &:after{
                content: "";
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid #fff;
                position: absolute;
                right: 10px;
                top: 20px;
                z-index: -1;
            }
            &.noChild{
                &:after{
                    display: none;
                }
            }
            &:last-child{
                border-bottom: none;
            }
        }
        .showMenu{
            > .submenu{
                display: block;
                list-style: none;
                padding: 0 0 0 15px;
                margin: 0;
                > li{
                    border: none;
                    > a{
                        color: ${props => props.theme.colors.white};
                        text-decoration: none;
                        padding: 12px 0px;
                        display: block;
                    }
                    > span{
                        padding: 12px 0px;
                    }
                }
                &.multiCol{
                    column-count: 2;
                }
            }
            &:after{
                border-top: none;
                border-bottom: 6px solid #fff;
            }
        }
    }
    .submenu{
        display: none;
    }
`
export const EmployerUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li{
        a{
            padding: 12px 8px;
            color: #fff;
            display: inline-block;
            text-decoration: none;
            &::after{
                content: "";
                width: 5px;
                height: 5px;
                display: inline-block;
                border-top: 2px solid #fff;
                border-right: 2px solid #fff;
                transform: rotate(45deg);
                margin-left: 8px;
                margin-bottom: 1px;
            }
        }
    }
`