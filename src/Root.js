import React, { Component } from "react";
import styled from "styled-components";

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
        <Table>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Short</th>
            <th>Price</th>
          </tr>
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
                    <CoinName>{item.name}</CoinName>
                    <CoinTag>{item.symbol}</CoinTag>
                    <CoinValue>${Number(item.priceUsd).toFixed(2)}</CoinValue>
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
  width: 100%;
`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const CoinRank = styled.td``;
const CoinName = styled.td``;
const CoinTag = styled.td``;
const CoinValue = styled.td``;
