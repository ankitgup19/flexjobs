import styled from "styled-components"
export const Button = styled.button`
    cursor: pointer;
    padding: 0.6rem 1.2rem;
    font-weight: 500;
    border-radius: 4px;
    display: flex;
    align-items: center;
    &.btn-primary{
        font-size: 1.6rem;
        line-height: 2.4rem;
        border: ${props => props.bgColor ? "1px solid #fff" : "none"};
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.bgColor || props.theme.colors.primaryLight};
        box-shadow: ${props => props.boxShadow || "0 4px 4px rgb(0 0 0 / 20%)"};
        margin: ${props => props.position == "center" ? "0 auto" : "0 0.2rem"};
        &:hover{
            background-color: ${props => props.bgColor && props.theme.colors.white};
            color: ${props => props.bgColor && props.theme.colors.black};
        }
    }
    &.toggle-btn{
        margin: 0 4px 0 0;
        background-color: ${props => props.theme.colors.white};
        border: 1px solid #ccc;
        font-size: 13px;
        line-height: 19px;
        color: #212529;        
        &.active{
            background: #00506d;
            color: ${props => props.theme.colors.white};
        }
        .count{
            margin-left: 3px;
        }
        &::after{
            content: "";
            border-top: 4px solid;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            display: flex;
            margin-left: 0.3rem;
        }
    }
`
