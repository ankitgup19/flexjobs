import React from "react";
import styled from "styled-components";

const Pagination = () => {
  return (
    <PaginationWrap>
      <PageItem disabled prev>
        <a class="page-link" href="/">
          Prev
        </a>
      </PageItem>
      <PageItem active>
        <a class="page-link" href="/">
          1
        </a>
      </PageItem>
      <PageItem>
        <a class="page-link" rel="next" href="/">
          2
        </a>
      </PageItem>
      <PageItem>
        <a class="page-link" href="/">
          3
        </a>
      </PageItem>
      <PageItem next>
        <a class="page-link" rel="next" href="/">
          Next
        </a>
      </PageItem>
    </PaginationWrap>
  );
};

export default Pagination;

const PaginationWrap = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

const PageItem = styled.li`
  .page-link {
    padding: 0.8rem;
    color: ${(props) =>
      props.disabled ? "#6c757d" : props.theme.colors.primaryLight};
    border: 1px solid
      ${(props) => (props.active ? props.theme.colors.primaryLight : "#dee2e6")};
    display: block;
    position: relative;
    margin-left: -1px;
    text-decoration: none;
    pointer-events: ${(props) => (props.active || props.disabled) && "none"};
    background-color: ${(props) =>
      props.active && props.theme.colors.primaryLight};
    color: ${(props) => props.active && props.theme.colors.white};
    border-top-left-radius: ${(props) => props.prev && "0.4rem"};
    border-bottom-left-radius: ${(props) => props.prev && "0.4rem"};
    border-top-right-radius: ${(props) => props.next && "0.4rem"};
    border-bottom-right-radius: ${(props) => props.next && "0.4rem"};
    &:hover {
      background-color: ${(props) => props.theme.colors.tertiary};
      border-color: #dee2e6;
      text-decoration: underline;
    }
  }
`;
