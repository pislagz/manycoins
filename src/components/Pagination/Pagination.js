import React from "react";
import styled from "styled-components";

const Pagination = (props) => (
  <Wrapper>
    <Buttons>
      <Button onClick={() => props.changePage(1)}>First</Button>
      <Button onClick={() => props.changePage(props.currentPage - 1)}>
        Previous
      </Button>
      {props.printPages().map((page, index) => (
        <Button
          className={props.currentPage === page ? "current-page" : ""}
          key={index}
          onClick={() => props.changePage(page)}
        >
          {page}
        </Button>
      ))}
      <Button onClick={() => props.changePage(props.currentPage + 1)}>
        Next
      </Button>
      <Button onClick={() => props.changePage(20)}>Last</Button>
    </Buttons>
  </Wrapper>
);

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Buttons = styled.ul`
  display: flex;
  list-style: none;
`;

const Button = styled.li`
  padding: 0.5rem 0.25rem;
  margin: 0.1rem;
  background: #dd845d;
  border-radius: 9999px;
  min-width: 2rem;
  border: 3px solid #6b6b6b;
  text-align: center;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #af83c5;
  }

  &:active {
    background: #9e60bd;
  }
`;
