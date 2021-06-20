import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

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
              <TitleRank>Rank</TitleRank>
              <TitleName>Name</TitleName>
              <TitlePrice>Price</TitlePrice>
              <Title24Rate>24h %</Title24Rate>
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
                    <CoinRank>{item.rank}</CoinRank>
                    <CoinName>
                      <ItemName>{item.name}</ItemName>{" "}
                      <ItemSymbol>{item.symbol}</ItemSymbol>
                    </CoinName>
                    <CoinValue>
                      $
                      {Number(item.priceUsd).toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </CoinValue>
                    <CoinRate
                      style={{
                        color:
                          Number(item.changePercent24Hr) >= 0
                            ? "#13b016"
                            : "#d6230f",
                      }}
                    >
                      {Number(item.changePercent24Hr).toFixed(2)}%
                    </CoinRate>
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
  /* min-width: 400px; */
  width: 100%;

  thead {
    background: #f4f4f4;
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
          font-weight: bold;
        }
      }
    }
  }
`;

const TitleRank = styled.th`
  text-align: center;
`;
const TitleName = styled.th`
  text-align: left;
`;
const TitlePrice = styled.th``;

const Title24Rate = styled.th`
  text-align: right;
`;

const Row = styled.tr``;

const CoinRank = styled.td`
  text-align: center;
`;

const CoinName = styled.td``;

const CoinValue = styled.td`
  text-align: right;
`;
const CoinRate = styled.td`
  text-align: right;
`;

const ItemName = styled.span`
  font-size: 1.1rem;
`;
const ItemSymbol = styled.span`
  font-weight: 300;
  font-style: italic;
`;
