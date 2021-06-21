import React from "react";
import styled from "styled-components";

export function TableHead() {
  return (
    <TheHead>
      <tr>
        <TitleRank className={"collapsing"}>Rank</TitleRank>
        <TitleName>Name</TitleName>
        <TitlePrice>Price</TitlePrice>
        <Title24Rate>24h %</Title24Rate>
        <TitleMarketCap className={"data-right collapsing"}>
          Market Cap
        </TitleMarketCap>
      </tr>
    </TheHead>
  );
}

const TheHead = styled.thead`
  background: #f4f4f4;
  border-bottom: 1px solid #bababa;
  tr {
    text-align: right;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

const TitleRank = styled.th`
  text-align: center;
  width: 5%;
`;
const TitleName = styled.th`
  text-align: left;
  width: 45%;
`;
const TitlePrice = styled.th`
  width: 45%;
`;

const Title24Rate = styled.th`
  text-align: right;
  width: 5%;
`;

const TitleMarketCap = styled.th``;
