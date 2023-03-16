import styled from "styled-components";

const Styled = {
    Wrapper: styled.div`
        word-wrap: break-word;
        border: 1px solid rgba(0,0,0,0.125);
        border-top: 2px solid #ff532a;
        padding: 1.6rem;
        h2{
            font-size: 2.4rem;
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
            color: #007CAD;
            border: 1px solid #007CAD;
            font-weight: 500;
            border-radius: 0.4rem;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
                color: #fff;
                background-color: #007CAD;
            }
        }
    `
}

export default Styled