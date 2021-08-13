import React from "react";
import {
  Row,
  Favs,
  CoinRank,
  CoinName,
  CoinValue,
  Coin24Rate,
  MarketCap,
  ItemIcon,
  ItemName,
  SymbolWrapper,
  ItemSymbol,
  ItemNameWrapper,
} from "./styled.js";
import { MONEY_FORMAT } from "../../../utils/utilityFunctions";
import coinImage from "../../../assets/icons/coin64.ico";
import { Favorite, NoFavorite } from "../Star/Star";

export function TableRow(props) {
  return props.items.map((item) => {
    if (props.onlyFavorites ? props.favorites.includes(item.id) : true) {
      return (
        <Row key={`${item.rank}-${item.id}`}>
          <Favs>
            <div onClick={() => props.handleFavClick(item.id)}>
              {!props.favorites?.includes(item.id) ? (
                <NoFavorite />
              ) : (
                <Favorite />
              )}
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
    } else {
      return null;
    }
  });
}
