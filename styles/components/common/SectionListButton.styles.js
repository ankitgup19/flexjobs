import styled from "styled-components";

const Styled = {
    SectionListButton: styled.section`
        border: 1px solid rgba(0,0,0,0.125);
        border-top: 2px solid ${props => props.theme.colors.secondary};
        padding: 1.6rem 1.6rem 2.8rem;
    `,
    P: styled.p`
        margin: 0 2.4rem 16px;
    `,
    Ol: styled.ol`
        padding: 0 32px 2.4rem 32px;
        margin: 0;
    `,    
    LinkBtnWrap: styled.div`
        display: grid;
        justify-content: center;
    `,
}

export default Styled;