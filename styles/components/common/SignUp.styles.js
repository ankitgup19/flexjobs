import styled from "styled-components";

export const StyledWrap = styled.div`
    display: flex;
`

export const StyledMain = styled.main`
    width: 75%;
    box-shadow: rgb(0 0 0 / 3%) 0 2px 0 2px;
    padding: 20px 12px 15px;
`

export const StyledAside = styled.aside`
    width: 25%;
    margin: 10px 0 0 15px;
`

export const AsideInner = styled.div`
    border: 1px solid rgba(0,0,0,0.125);
    padding: 16px;
`

export const H2 = styled.h2`
    margin: 16px 0;
    text-align: center;
    color: ${props => props.theme.colors.primary};
`

export const MainHeading = styled.h1`
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.xl};
    line-height: 3.4rem;
`

export const StyledLink = styled.a`
    color: ${props => props.theme.colors.primaryLight};
    text-decoration: none;
    &:hover{
        color: ${props => props.theme.colors.primaryDark};
        text-decoration: underline;
    }
`

export const StyledFormWrap = styled.div`
    margin: 40px 50px 0;
    padding: 30px 100px;
    background: #f5f5f5;
    .fieldGrp{
        margin: 0 0 24px;
        label{
            position: absolute;
            font-weight: 400;
            line-height: 3px;
            left: 12px;
            background-color: #f5f5f5;
        }
        .pwd-mask{
            top: 37px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 58px;
        }
    }
`

export const SubHeading = styled.h2`
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.lg};
    line-height: 2.8rem;
    margin: 0 0 20px;
    padding: 8px 0;
    display: flex;
    align-items: center;
    img{
        margin-right: 0.8rem;
    }
`

export const SignUpBtn = styled.button`
    background-color: ${props => props.theme.colors.secondary};
    border: none;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    font-size: 2rem;
    line-height: 2.8rem;
    padding: 8px 48px;
    border-radius: 4px;
    cursor: pointer;
`

export const FormFooterWrap = styled.div`
    text-align: center;
    margin: 24px 0 0;
`

export const EmployerLink = styled.a`
    display: block;
    margin-top: 10px;
    color: ${props => props.theme.colors.primaryLight};
    text-decoration: none;
    &:hover{
        color: ${props => props.theme.colors.primaryDark};
        text-decoration: underline;
    }
    &::after{
        content: "";
        width: 5px;
        height: 5px;
        display: inline-block;
        border-width: 1px 1px 0 0;
        border-style: solid;
        border-color: inherit;
        transform: rotate(45deg);
        margin: 0px 0 2px 2px;
    }
`