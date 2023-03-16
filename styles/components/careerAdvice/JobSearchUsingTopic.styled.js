import styled from "styled-components";

const Styled = {
    Wrapper: styled.div`
        word-wrap: break-word;
        border: .1rem solid rgba(0,0,0,0.125);
        border-top: .2rem solid ${(props) => props.theme.colors.secondary};
        padding: 1.6rem;
        h2{
            font-size: ${(props) => props.theme.fontSize.lg};
            line-height: 2.8rem;
            margin: 0 0 2.4rem;
            text-align: center;
        }
    `,
    InnerWrap: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        a{
            display: inline-block;
            padding: .6rem 1.2rem;
            color: ${(props) => props.theme.colors.primaryLight};
            border: .1rem solid ${(props) => props.theme.colors.primaryLight};;
            font-weight: 500;
            border-radius: 0.4rem;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
                color: ${(props) => props.theme.colors.white};;
                background-color: ${(props) => props.theme.colors.primaryLight};;
            }
        }
    `
}

export default Styled