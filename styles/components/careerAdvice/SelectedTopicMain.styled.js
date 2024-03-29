import styled from "styled-components";

const Styled = {
    Main: styled.main`
        border: 1px solid rgba(0,0,0,0.125);
        border-top: 2px solid ${props => props.theme.colors.secondary};
        margin: 0 0 0 -1.5rem;
    `,
}

export default Styled;