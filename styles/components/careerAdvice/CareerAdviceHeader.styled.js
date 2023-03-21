import styled from "styled-components";

const Styled = {
    CareerAdviceWrapper: styled.div`
        display: flex;
        flex-direction: column;
        background: url(${(props) => props.bgImgUrl});
        background-color: ${props => props.theme.colors.lightBlue1};
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
        width: ${props => props.description ? '66.66666667%' : '50%'};
        flex: 0 0 auto;
        padding: 0 2.4rem 0 1.6rem;
        h1{
            font-weight: ${props => props.description ? '600' : '500'};
            font-size: ${props => props.description ? props.theme.fontSize.xl : props.theme.fontSize.xxl};
            line-height: ${props => props.description ? '3.4rem' : '4.3rem'};
            margin:  ${props => props.description ? '0 0 2.4rem' : '2.4rem 0'};
        }
    `
}

export default Styled;