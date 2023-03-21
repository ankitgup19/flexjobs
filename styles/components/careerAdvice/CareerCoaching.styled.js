import styled, {css} from "styled-components";

const Styled = {    
    P: styled.p`
        line-height: 2.4rem;
        ${props => props.center && css`
            text-align: center;
        `}
    `,
    Ul2col: styled.ul`
        display: grid;
        grid-template-columns: 50% 50%;	
    `, 
    Ul2colLi: styled.li`
    `, 
}

export default Styled;