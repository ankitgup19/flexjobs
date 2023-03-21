import styled from "styled-components";

const Styled = {
    Wrap: styled.a`
        background-color: ${props => props.theme.colors.white};
        border: 1px solid rgba(0,0,0,0.125);
        border-radius: 0.4rem;
        overflow: hidden;
        color: #007CAD;
        text-decoration: none;
        cursor: pointer;
        .coach-link{
            padding: 1.6rem .8rem;
            display: block;
            text-align: center;
        }
        &:hover{
            color: #23527c;
            text-decoration: underline;
        }
    `
}

export default Styled