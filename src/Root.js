import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { MONEY_FORMAT } from "./utils/utilityFunctions";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };
  }

  getItems = async (API_LINK, BODY) => {
    try {
      let response = await fetch(API_LINK, BODY);
      response = await response.json();

      console.log(response);
      this.setState({ items: response.data, isLoading: false });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    const API_LINK = "https://api.coincap.io/v2/assets";
    const BODY = () => {
      return {
        method: "GET",
      };
    };

    this.getItems(API_LINK, BODY);
  }

  render() {
    return (
      <div className="root">
        <GlobalStyle />
        <Table>
          <thead>
            <tr>
              <TitleRank className={"collapsing"}>Rank</TitleRank>
              <TitleName>Name</TitleName>
              <TitlePrice>Price</TitlePrice>
              <Title24Rate>24h %</Title24Rate>
              <TitleMarketCap className={"data-right"}>
                Market Cap
              </TitleMarketCap>
            </tr>
          </thead>
          {this.state.isLoading ? (
            <tbody>
              <tr>
                <th>Loading... ⏳</th>
              </tr>
            </tbody>
          ) : (
            this.state.items.map((item) => {
              return (
                <tbody key={item.rank}>
                  <Row>
                    <CoinRank className={"collapsing"}>{item.rank}</CoinRank>
                    <CoinName>
                      <ItemIcon
                        src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} // icon url as a template literal
                        onError={(e) => {
                          e.target.onError = null;
                          e.target.src =
                            "https://coincap.io/static/logo_mark.png"; // fallback url if there's no icon in coincap database
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
                        color:
                          Number(item.changePercent24Hr) > 0
                            ? "#13b016"
                            : "#d6230f",
                      }}
                    >
                      {Number(item.changePercent24Hr).toFixed(2)}%
                    </Coin24Rate>
                    <MarketCap>{MONEY_FORMAT(item.marketCapUsd)}</MarketCap>
                  </Row>
                </tbody>
              );
            })
          )}
        </Table>
      </div>
    );
  }
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;

  thead {
    background: #f4f4f4;
    border-bottom: 1px solid #bababa;
    tr {
      text-align: right;
      font-weight: bold;
    }
  }

  th,
  td {
    padding: 0.8rem 1.1rem;
  }

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
      &:hover {
        background: #f5f5f5;
        span:first-of-type {
          font-weight: 500;
        }
      }
    }
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
