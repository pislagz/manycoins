import React from "react";
import styled from "styled-components";
import { MONEY_FORMAT } from "../../../utils/utilityFunctions";

export function TableRow(props) {
  return props.items.map((item) => {
    return (
      <Row key={`${item.rank}-${item.id}`}>
        <CoinRank className={"collapsing"}>{item.rank}</CoinRank>
        <CoinName>
          <ItemIcon
            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} // icon url as a template literal
            onError={(e) => {
              e.target.onError = null;
              e.target.src = "https://coincap.io/static/logo_mark.png"; // fallback url if there's no icon in coincap database
            }}
          />
          <ItemNameWrapper>
            <ItemName>{item.name}</ItemName>
            <ItemSymbol>{item.symbol}</ItemSymbol>
          </ItemNameWrapper>
        </CoinName>
        <CoinValue className={"data-right"}>
          $
          {Number(item.priceUsd).toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </CoinValue>
        <Coin24Rate
          className={"data-right"}
          style={{
            color: Number(item.changePercent24Hr) > 0 ? "#13b016" : "#d6230f",
          }}
        >
          {Number(item.changePercent24Hr).toFixed(2)}%
        </Coin24Rate>
        <MarketCap className={"collapsing"}>
          {MONEY_FORMAT(item.marketCapUsd)}
        </MarketCap>
      </Row>
    );
  });
}

const Row = styled.tr`
  cursor: pointer;
`;

const CoinRank = styled.td`
  text-align: center;
`;

const CoinName = styled.td`
  text-align: center;
  display: flex;
`;

const CoinValue = styled.td``;
const Coin24Rate = styled.td``;
const MarketCap = styled.td``;

const ItemIcon = styled.img`
  align-self: center;
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1rem;
`;

const ItemName = styled.span`
  font-size: 1.1rem;
`;
const ItemSymbol = styled.span`
  font-weight: 300;
  font-style: italic;
`;

const ItemNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    text-align: left;
  }
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;
