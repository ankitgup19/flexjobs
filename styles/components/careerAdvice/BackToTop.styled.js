import styled from "styled-components";

const Styled = {
    P: styled.p`
        display: grid;
    `,
    Link: styled.a`
        justify-self: end;
        text-decoration: none;
        color: ${props => props.theme.colors.primaryLight};
        outline: none;
        margin: 0 1.5rem 0 0;
        
        &:hover,
        &:focus,
        &:active {
            text-decoration: underline;
            color: ${props => props.theme.colors.primaryDark};
        }
        .fa {
            margin: 0 .6rem 0 0;
        }
    `,
}

export default Styled;