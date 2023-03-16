import styled from "styled-components";

const Styled = {
    CareerAdviceWrapper: styled.div`
        display: flex;
        flex-direction: column;
        background: url(${(props) => props.bgImgUrl});
        background-color: #C6DAE5;
        background-size: 125%;
        background-position: center center;
    `,
    InnerWrapper: styled.div`
        background: url(${(props) => props.rightImgUrl}) no-repeat;
        background-size: contain;
        background-position: center right;
        padding: 4.8rem 0;
    `,
    ContentWrap: styled.div`
        width: 66.66666667%;
        flex: 0 0 auto;
        padding: 0 2.4rem 0 1.6rem;
        h1{
            font-weight: 600;
            font-size: ${(props) => props.theme.fontSize.xl};
            line-height: 3.4rem;
            margin: 0 0 2.4rem;
        }
    `
}

export default Styled