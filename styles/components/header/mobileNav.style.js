import styled from "styled-components";

export const MbHeadWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    align-items: center;
    .logo {
        flex-grow: 1;
        text-align: center;
        .link{
            display: inline-block;
        }
    }
`

export const NavButton = styled.button`
    padding: 0;
    font-size: ${props => props.theme.fontSize.md};
    color: ${props => props.theme.colors.primary};
    border: none;
    background-color: transparent;
    text-align: left;
    width: 80px;
`

export const SignUpLink = styled.a`
    text-decoration: none;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 4px;
    color: ${props => props.theme.colors.white};
    padding: 6px 12px;
`

export const MbNavItemsWrap = styled.div`
    background-color: ${props => props.theme.colors.primary};
    height: calc(100vh - 54px);
    overflow-y: auto;
    position: fixed;
    width: 100%;
    left: 0;
    top: 58px;
    color: ${props => props.theme.colors.white};
    padding: 5px 8px;
    .menu{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            border-bottom: 1px solid rgba(255,255,255,0.5);
            position: relative;
            &:after{
                content: "";
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid ${props => props.theme.colors.white};
                position: absolute;
                right: 10px;
                top: 20px;
                z-index: -1;
            }
            &.no-child{
                &:after{
                    display: none;
                }
            }
            &:last-child{
                border-bottom: none;
            }
        }
        .show-menu{
            > .submenu{
                display: block;
                list-style: none;
                padding: 0 0 0 15px;
                margin: 0;
                > li{
                    border: none;
                }
                &.multi-col{
                    column-count: 2;
                }
            }
            &:after{
                border-top: none;
                border-bottom: 6px solid ${props => props.theme.colors.white};
            }
        }
    }
    .submenu{
        display: none;
    }
`

export const StyledText = styled.span`
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    padding: ${({childMenu}) => childMenu ? "12px 0" : "12px 8px"};
    display: block;
    .prefix-icon{
        margin-right: 7px;
        position: relative;
        bottom: -2px;
    }
`

export const StyledLink = styled.a`
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    padding: 12px 0px;
    display: block;
`

export const EmployerUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    a{
        padding: 12px 8px;
        color: ${props => props.theme.colors.white};
        display: inline-block;
        text-decoration: none;
        &::after{
            content: "";
            width: 5px;
            height: 5px;
            display: inline-block;
            border-top: 2px solid ${props => props.theme.colors.white};
            border-right: 2px solid ${props => props.theme.colors.white};
            transform: rotate(45deg);
            margin-left: 8px;
            margin-bottom: 1px;
        }
    }
`

export const SettingsLink = styled.a`
    font-size: 22px;
    color: ${props => props.theme.colors.primary};
    width: 80px;
    text-align: right;
`