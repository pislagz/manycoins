import React from "react";
import Head from "./TableHead/TableHead";
import Columns from "./Columns/Columns";
import { TableLoading } from "./TableLoading/TableLoading";
import { TableRow } from "./TableRow";
import { Wrapper } from "./styled";

export default function Table(props) {
  const { isLoading } = props;

  return (
    <Wrapper>
      <Columns />
      <Head {...props} />
      <tbody>{isLoading ? <TableLoading /> : <TableRow {...props} />}</tbody>
    </Wrapper>
  );
}
