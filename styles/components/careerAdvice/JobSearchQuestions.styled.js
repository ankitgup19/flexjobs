import styled from "styled-components";

const Styled = {
    Wrapper: styled.div`
        padding: 1.6rem;
        background-color: #e7edf3;
        border: 1px solid #C5DAE4;
        h2{
            font-size: ${(props) => props.theme.fontSize.lg};
            line-height: 2.8rem;
            margin: 0 0 2.4rem;
            text-align: center;
        }
    `,
    InnerWrap: styled.div`
        background-color: ${(props) => props.theme.colors.white};
    `,
    QuestionWrap: styled.div`
        padding: 1.6rem;
        border-bottom: 1px solid rgba(0,0,0,0.125);
        a{
            color: ${(props) => props.theme.colors.primaryLight};
            text-decoration: none;
            font-weight: 500;
            &:hover{
                text-decoration: underline;
                color: ${(props) => props.theme.colors.primaryDark};
            }
        }
    `
}

export default Styled;