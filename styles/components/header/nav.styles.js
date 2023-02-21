import styled from "styled-components";

export const StyledNav = styled.nav`
    background-color: ${({theme}) => theme.colors.blue_1};
    position: relative;
`
export const StyledWrap = styled.div`
    display: flex;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    justify-content: space-between;
`
export const StyledInnerWrap = styled.ul`
    margin: 0;
    padding: ${props => props.unAuth ? "0 0 0 25px" : 0 };
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`

export const StyledSubmenu = styled.div`
    position: absolute;
    background-color: ${props => props.theme.colors.white};
    width: 100%;
    left: 0;
    box-shadow: 0 6px 4px 0 rgb(155 155 155 / 19%);
    display: none;
`

export const StyledSubmenuWrap = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    max-width: 1170px;
    margin: 0 auto;
    a{
        padding: 12px 5px 12px 15px;
        display: inline-block;
        color: ${props => props.theme.colors.blue_3};
        text-decoration: none;
        &:hover{
            color: ${props => props.theme.colors.blue_2};
            text-decoration: underline;
        }
    }
    &::before{
        content: "";
    }
`

export const StyledLink = styled.a`
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-size: ${props => props.icon ? props.theme.fontSize.fs24 : props.theme.fontSize.fs16} ;
    line-height: ${props => props.button ? props.theme.lineHeight.lh24 : props.theme.lineHeight.lh20};
    display: inline-block;
    padding: ${props => props.button ? "6px 12px" : props.icon ? "10px 0" : "12px 0"};
    background-color: ${props => props.button ? props.theme.colors.orange_1 : "transparent"};
    border-radius: ${props => props.button ? "4px" : ""};
    font-weight: ${({button}) => button ? 500 : 400};
    &:hover{
        text-decoration: underline;
    }
`

export const StyledUserWrap = styled.div`
    width: 250px;
    display: flex;
    justify-content: end;
    align-items: center;
    a{
        display: inline-block;
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
        &::after{
            content: "";
            display: inline-block;
            border-top: 5px solid #fff;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            margin: 0 0 2px 5px;
        }
        &.active + #dropdown-menu-member{
            display: block;
        }
    }
`
export const StyledDropdownMenu = styled.div`
    position: absolute;
    background-color: ${props => props.theme.colors.white};
    top: 100%;
    right: 25px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 4px;
    display: none;
    a{
        color: ${props => props.theme.colors.blue_3};
        border-bottom: 1px solid #d4d4d4;
        padding: 12px 24px;
        display: block;
        &:hover{
            background-color: ${props => props.theme.colors.gray_1};
        }
    }
`