import styled from "styled-components";

const Styled = {
    P: styled.p`
        color: ${props => props.theme.colors.secondary};
        font-size: ${props => props.theme.fontSize.lg};
        margin: .8rem 0;
    `,
    Link: styled.a`
        background-color: ${props => props.theme.colors.lightBlue1};
        display: grid;
        justify-items: center;
        margin: 1.6rem 0;
        padding: 1.6rem;
        text-decoration: none;
        font-weight: 500;
        cursor: pointer;
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
        color: ${props => props.theme.colors.primaryLight};
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
    ContentWrapper: styled.div`
        padding: 0 1.2rem;
        margin: 1.6rem 0;
        h2{
            color: ${props => props.theme.colors.white};
            font-size: 2.4rem;
            line-height: 2.8rem;
            margin: 0 0 0.8rem;
            text-align: center;
        }
        p{
            color: ${props => props.theme.colors.white};
            text-align: center;
        }
        small{
            font-size: 1.4rem;
            line-height: 1.8rem;
            color: ${props => props.theme.colors.white};
            text-align: center;
            display: block;
        }
    `,
    FormWrap: styled.div`
        max-width: 66.67%;
        margin: 0 auto;
        .col-grid{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px;
        }
    `
}

export default Styled;