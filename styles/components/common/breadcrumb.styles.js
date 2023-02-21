import styled from "styled-components";

export const StyledbcrumbWrap = styled.ul`
    margin: 0;
    padding: 0.8rem 0;
    list-style: none;
    font-size: ${props => props.theme.fontSize.xxs};
    display: flex;
    a{
        color: ${props => props.theme.colors.primaryLight};
        text-decoration: none;
    }
    li{
        & + li{
            &.active,
            &::before{
                content: "\/";
                padding: 0 0.7rem 0 0.4rem;
            }
        }
        &.active{
            font-weight: 600;
        }
    }
`