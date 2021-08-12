import React from "react";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_COINS } from "graphql/queries";
import { Wrapper, Buttons, Button } from "./styled.js";

export const Pagination = (props) => {
  const { data } = useQuery(GET_COINS, {
    variables: {
      sortBy: "rank",
      after: null,
      before: null,
      dir: "DESC",
    },
  });

  useEffect(() => {
    console.log("graphql-coins: ");
    console.log(data);
  }, [data]);

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
