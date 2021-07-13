import React from "react";
import styled from "styled-components";
import { MONEY_FORMAT } from "../../../utils/utilityFunctions";
import {
  Collapsing,
  CollapsingIcon,
  CustomBelow770px,
  Expanding,
  FontSizeBelow770px,
} from "../../../styles/GlobalStyleSnippets";
import coinImage from "../../../assets/icons/coin64.ico";

export function TableRow(props) {
  return props.items.map((item) => {
    return (
      <Row key={`${item.rank}-${item.id}`}>
        <Favs>
          <div
            onClick={() =>
              localStorage.getItem(item.id) === null
                ? localStorage.setItem(item.id, "isFav")
                : localStorage.removeItem(item.id)
            }
          >
            {localStorage.getItem(item.id) === null ? "♡" : "❤️"}
          </div>
        </Favs>
        <CoinRank>{item.rank}</CoinRank>
        <CoinName>
          <ItemIcon
            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} // icon url
            onError={(e) => {
              e.target.onError = null;
              e.target.src = coinImage; // fallback if there's no icon in coincap database
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

const Favs = styled.td`
  padding-left: 1rem !important;
  div {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 1.5rem;
    color: lightgray;

    &:hover {
      color: red;
    }

    &:active {
      color: red;
      text-shadow: 0px 0px 3px red;
    }
  }
`;

const CoinRank = styled.td`
  ${Collapsing}
  text-align: center;
  padding-left: 0 !important;
`;

const CoinName = styled.td`
  text-align: center;
  display: flex;
`;

const CoinValue = styled.td`
  ${FontSizeBelow770px(0.9)}
  font-size: 1rem;
  text-align: right;
`;
const Coin24Rate = styled.td`
  ${FontSizeBelow770px(0.9)}
  font-size: 1rem;
  text-align: right;
  ${CustomBelow770px("text-align: center;")}
`;
const MarketCap = styled.td`
  ${Collapsing}
  text-align: center;
`;

const ItemIcon = styled.img`
  ${CollapsingIcon}
  align-self: center;
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1rem;
`;

const ItemName = styled.span`
  ${FontSizeBelow770px(0.8)}
  font-size: 1.1rem;
`;

const SymbolWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    ${Expanding};
    margin: 0 0 0 0.5rem;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    background: #fee8ff;
    border-radius: 9999px;
    padding: 0.2rem 0.5rem;
  }
`;

const ItemSymbol = styled.span`
  ${FontSizeBelow770px(0.9)}
  font-size: 1rem;
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
