import React from 'react';
import styled from 'styled-components';

const BannerUnlock = (props) => {

  return (
    <>
      <BannerUnlockWrap 
        href='/Members/Flexers/Register.aspx'
      >
        <div className='card'>
          <div className='card-content'>
            <img src='https://www.flexjobs.com/images/icons/icn-lock-arrow.svg' className='unlock-lock' />
            <h3>Join FlexJobs to Unlock Full Job Details and Apply!</h3>
            <ul className='benefit-ul'>
              <li>Find a better job, faster!</li>
              <li>Hand-screened leads</li>
              <li>No ads, scams, junk</li>
              <li>Great job search support</li>
              <li>50+ career categories</li>
            </ul>
            <LinkBtn type='button' fWeight='500' widthNull={true} inline={true}>Create an Account to Unlock</LinkBtn>
          </div>
          <img src={props.imgSrc} alt='job seeker image' title='job seeker image' />
        </div>
      </BannerUnlockWrap>
    </>
  );
};

export default BannerUnlock;

const BannerUnlockWrap = styled.a`
  text-decoration: none;
  margin: 1.6rem 0 0;
  &:hover,
  &:focus {
    h3,li {
      text-decoration: underline;
      text-decoration-color: ${props => props.theme.colors.black};
    }
  }  
  .card {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    position: relative;
    max-width: 95%;
    padding: 2.4rem;
    img {
      position: absolute;
      right: 3%;
      bottom: 0px;
      max-width: 40%;
      max-height: 99%;
    }
  }  
  .benefit-ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0 0 1.6rem;
    li {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      &:before {
        content: '\f00c';
        color: #ff6843;
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        margin-right: 8px;
      }
    }
  }
`;
const LinkBtn = styled.button`
    background-color: ${props => props.primary ? props.theme.colors.primaryLight : props.theme.colors.secondary};
    border: 0;
    padding: ${props => props.primary ? '0.7rem 2.4rem' : '0.7rem 1.2rem'};
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: ${props => props.fWeight || '700'};
    line-height: 1.5;
    color: ${props => props.theme.colors.white};    
    display: ${props => (props.widthNull || props.primary) ? 'inline-grid' : 'flex'};
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    width: ${props => (props.widthNull || props.primary) ? null : '100%'};
    outline: 0;
    ${props => props.primary && css`
        &:hover,
        &:focus {
            background: ${props => props.theme.colors.primary};
        }
    `}
`