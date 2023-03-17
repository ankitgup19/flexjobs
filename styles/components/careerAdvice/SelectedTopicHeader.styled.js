import styled from "styled-components";

const Styled = {
    Heading: styled.h1`
        background-color: #e7edf3;
        border-top: 1px solid #dee2e6;
        padding: 4rem 1.2rem 2.4rem;
        margin: 1.4rem 0 0 -1.5rem;
        font-size: ${props => props.theme.fontSize.xl};
        line-height: 1.2;
    `,
}

export default Styled;