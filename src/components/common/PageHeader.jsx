import React from 'react';
import styled from 'styled-components';

const PageHeader = (props) => {
  return (
    <>
      <H1>{props.mainHeading}</H1>
    </>
  );
};

const H1 = styled.h1`
  font-size: ${props => props.theme.fontSize.xl};
  line-height: 3.4rem;
  margin: 0 0 .8rem;
  padding: 0 0 .8rem;//0 1.2rem .8rem;
  border-bottom: ${props => props.borderBottom ? '1px solid #bfbfbf' : '1px solid #bfbfbf'};
`;

export default PageHeader;
