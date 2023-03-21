import styled, {css} from "styled-components";

const Styled = {    
    SectionHIW: styled.section`
        padding: 0 1.5rem;
    `,
    Heading: styled.h2`
        background: url(${(props) => props.src}) no-repeat;
        text-align: center;
        background-position: center top;
        background-size: 4.5rem auto;
        padding-top: 6rem;
    `,
    P: styled.p`
        line-height: 2.4rem;
        ${props => props.center && css`
            text-align: center;
        `}
    `,        
    StepBoxWrap: styled.div`
      margin: 0 auto 20px auto;
      display: flex;
      width: 100%;
  `,   
    StepBox: styled.div`
        border: 1px solid #e3e3e3;
        margin: 1.5rem 1.1rem;
        padding: .8rem 1.2rem;
        border-radius: 4px;
        flex: 1;
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    `,  
    StepBoxHeader: styled.header`
        display: flex;
        align-items: center;
        margin: 0 0 1.6rem;
    `,
    StepImg: styled.img` 
   `,  
    StepHeading: styled.h3`
       margin: 0 1.2rem;
       color: ${props => props.theme.colors.tertiaryDarkest};
       font-size: 1.7rem;
   `, 
   StepArrow: styled.div`
        align-self: center;
        margin: 0 -20px 0 -24px;
        font-size: 48px;
        overflow: visible;
        width: 36px;
        max-width: 36px;
        z-index: 1;
        color: rgba(85,172,238,0.5);
    `, 
}

export default Styled;