import styled from "styled-components";

const Styled = {
    Wrapper: styled.div`
        padding: 0 12px;
        p{
            &.description{
                padding: 1.6rem;
                border: 1px solid rgba(0,0,0,0.125);
                border-radius: 0.4rem;
                max-width: 54rem;
                margin: 0 auto 4.8rem;
            }
            &.text-center{
                text-align: center;
            }
            &.extra-space{
                margin: 2.4rem 0;
            }
        }
        a{
            color: #007CAD;
            text-decoration: none;
            &:hover{
                color: #23527c;
                text-decoration: underline;
            }
        }
    `,
    InnerWrapper: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        ul{
            padding-left: 30px;
        }
    `
}

export default Styled