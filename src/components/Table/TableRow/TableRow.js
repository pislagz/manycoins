import React from "react";
import styled from "styled-components";
import { MONEY_FORMAT } from "../../../utils/utilityFunctions";
import { Collapsing, Expanding } from "../../../styles/GlobalStyleSnippets";

export function TableRow(props) {
  return props.items.map((item) => {
    return (
      <Row key={`${item.rank}-${item.id}`}>
        <CoinRank>{item.rank}</CoinRank>
        <CoinName>
          <ItemIcon
            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} // icon url as a template literal
            onError={(e) => {
              e.target.onError = null;
              e.target.src = `https://assets.coincap.io/assets/icons/btg@2x.png`; // fallback url if there's no icon in coincap database
            }}
          />
          <ItemNameWrapper>
            <ItemName>{item.name}</ItemName>
            <SymbolWrapper>
              <ItemSymbol>{item.symbol}</ItemSymbol>
              <p>#{item.rank}</p>
            </SymbolWrapper>
          </ItemNameWrapper>
        </CoinName>
        <CoinValue>
          $
          {item.priceUsd >= 1
            ? Number(item.priceUsd).toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            : Number(item.priceUsd).toFixed(8)}
        </CoinValue>
        <Coin24Rate
          style={{
            color: Number(item.changePercent24Hr) > 0 ? "#13b016" : "#d6230f",
          }}
        >
          {Number(item.changePercent24Hr).toFixed(2)}%
        </Coin24Rate>
        <MarketCap>{MONEY_FORMAT(item.marketCapUsd)}</MarketCap>
      </Row>
    );
  });
}

const Row = styled.tr`
  cursor: pointer;
`;

const CoinRank = styled.td`
  ${Collapsing};
  text-align: center;
`;

const CoinName = styled.td`
  text-align: center;
  display: flex;
`;

const CoinValue = styled.td`
  text-align: right;
`;
const Coin24Rate = styled.td`
  text-align: right;
`;
const MarketCap = styled.td`
  ${Collapsing};
`;

const ItemIcon = styled.img`
  align-self: center;
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1rem;
`;

const ItemName = styled.span`
  font-size: 1.1rem;
`;

const SymbolWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    ${Expanding};
    margin: 0 0 0 1rem;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    background: #fee8ff;
    border-radius: 9999px;
    padding: 0.2rem 0.5rem;
  }
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
