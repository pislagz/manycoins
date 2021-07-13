import React from "react";
import styled from "styled-components";
import { CustomBelow770px } from "../../../styles/GlobalStyleSnippets";

const Columns = () => (
  <colgroup>
    <Column1 />
    <Column2 />
    <Column3 />
    <Column4 />
    <Column5 />
    <Column6 />
  </colgroup>
);

export default Columns;

const Column1 = styled.col`
  width: 30px;
`;
const Column2 = styled.col`
  width: 10px;
`;
const Column3 = styled.col``;
const Column4 = styled.col`
  width: 45%;
  ${CustomBelow770px(`  width: unset;`)}
`;
const Column5 = styled.col`
  width: 8%;
  ${CustomBelow770px(`  width: unset;`)}
`;
const Column6 = styled.col`
  width: 12%;
  ${CustomBelow770px(`  width: unset;`)}
`;
