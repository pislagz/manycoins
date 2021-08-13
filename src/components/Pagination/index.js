import React from "react";
import { Wrapper, Buttons, Button } from "./styled.js";

export const Pagination = (props) => {
  return (
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
};
