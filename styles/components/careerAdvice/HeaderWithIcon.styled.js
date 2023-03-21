import styled from "styled-components";

const Styled = {
    Heading: styled.h2`
        background: url(${(props) => props.src}) no-repeat;
        text-align: center;
        background-position: center top;
        background-size: 4.5rem auto;
        padding-top: 6rem;
    `
}

export default Styled;