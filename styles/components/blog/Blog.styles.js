import styled from "styled-components";

export const BlogWrap = styled.div`
    box-shadow: rgb(0 0 0 / 3%) 0 2px 0 2px;
    padding: 0 0 1.5rem;
    margin: 5.1rem 0 0;  
    @media (min-width: 1400px) {
        margin: 5.1rem -1.5rem 0;
    }
`;

export const BlogFooter = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0 1.6rem;
`;

export const H2 = styled.h2`
  &.h2 {
    margin: 2.4rem 0;
  }
  display: inline-block;
  background-color: #fff;
  padding-right: 1.2rem;
`;

export const HeadWrap = styled.div`
  position: relative;
  &::after {
    content: "";
    border: 1px solid #000;
    display: block;
    opacity: 0.25;
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;