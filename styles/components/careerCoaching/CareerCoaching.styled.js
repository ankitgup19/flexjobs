import styled from "styled-components";

const Styled = {
    Wrapper: styled.div`
        background-color: #e7edf3;
        padding: 2.4rem 3.6rem 4.8rem;
        .headImg{
            display: block;
            margin: 0 auto 1.5rem;
        }
        h2{
            font-size: 2.4rem;
            text-align: center;
            margin: 0 0 2.4rem;
        }
    `,
    InnerWrap: styled.div`
        margin: 2.4rem 0 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3rem;
    `,
    BottomWrap: styled.div`
        margin: 1.6rem 0 0;
        p{
            margin: ${props => props.noMargin && 0};
        }
        a{
            color: ${props => props.theme.colors.primaryLight};
            text-decoration: none;
            &:hover{
                color: ${props => props.theme.colors.primaryDark};
                text-decoration: underline;
            }
        }
    `
}

export default Styled