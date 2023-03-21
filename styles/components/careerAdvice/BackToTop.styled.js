import styled from "styled-components";

const Styled = {
    P: styled.p`
        display: grid;
    `,
    Link: styled.a`
        justify-self: end;
        text-decoration: none;
        color: #007CAD;
        outline: none;
        
        &:hover,
        &:focus,
        &:active {
            text-decoration: underline;
            color: #23527c;
        }
        .fa {
            margin: 0 .6rem 0 0;
        }
    `,
}

export default Styled;