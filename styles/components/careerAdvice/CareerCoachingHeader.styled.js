import styled from "styled-components";

const Styled = {
    Heading: styled.h1`
        text-align: center;
        padding: 4rem 1.2rem 2.4rem;
        margin: 0 0 0 -1.5rem;
        font-size: ${props => props.theme.fontSize.xl};
        line-height: 1.2;
    `,
    Emphasized: styled.span`
        color: #f00;
    `,
}

export default Styled;