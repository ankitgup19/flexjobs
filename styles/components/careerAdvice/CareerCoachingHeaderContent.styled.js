import styled from "styled-components";

const Styled = {
    Heading: styled.h1`
        text-align: center;
        padding: 3.1rem 1.2rem 2.4rem;
        margin: 0 0 0 -1.5rem;
        font-size: ${props => props.theme.fontSize.xl};
        line-height: 1.2;
    `,
    Emphasized: styled.span`
        color: #f00;
    `,
    Content: styled.div`
        text-align: center;
        padding: 0 1.2rem 2.4rem;
    `,
    Bold: styled.strong`
        font-weight: 700;
    `, 
    P: styled.p`
        
    `,   
    Ul: styled.ul`
        text-align: left;
    `,   
    Li: styled.li`
        
    `,
}

export default Styled;