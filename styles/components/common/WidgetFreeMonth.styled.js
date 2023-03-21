import styled from "styled-components";

const Styled = {
    P: styled.p`
        color: #ff532a;
        font-size: ${props => props.theme.fontSize.lg};
        margin: .8rem 0;
    `,
    Link: styled.a`
        background-color: #C6DAE5;
        display: grid;
        justify-items: center;
        margin: 1.6rem 0;
        padding: 1.6rem;
        text-decoration: none;
        font-weight: 500;
        &:hover,
        &:focus {
            p {
                text-decoration: underline;
                text-decoration-color: ${props => props.theme.colors.primaryDark};
            }
        }
    `,
    Img: styled.img`
    `,
    I: styled.i`
        font-style: italic;
    `,    
    Button: styled.button`
        color: #007CAD;
        outline: none ;
        text-decoration: none;
        background: transparent;
        border: 0;
        font-size: ${props => props.theme.fontSize.sm};
        line-height: 2.4rem;
        cursor: pointer;
        &:hover,
        &:focus {
            text-decoration: underline;
        }
    `,
}

export default Styled;