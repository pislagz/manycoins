import React, { Component } from "react";
import styled from "styled-components";
import { CONFIG } from "../../../utils/sortingFunctions";

const SORTING_STATE = {
  descending: "descending",
  ascending: "ascending",
};

export default class TableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingState: SORTING_STATE.descending,
      currentlySortedColumn: "",
    };
    this.isDescending = () =>
      this.state.sortingState === SORTING_STATE.descending;
  }

  componentDidMount() {
    const API_LINK = "https://api.coincap.io/v2/assets";
    const BODY = () => {
      return {
        method: "GET",
      };
    };

    // Include data asap:
    this.props.getItems(API_LINK, BODY);

    // Start refreshing data:
    const loop = () => {
      const type = this.state.currentlySortedColumn;
      const sortingFunction = () => {
        if (type !== "") {
          return this.isDescending()
            ? CONFIG[type].descendingFunction
            : CONFIG[type].ascendingFunction;
        } else {
          return false;
        }
      };
      this.props.getItems(API_LINK, BODY, sortingFunction());
      setTimeout(loop, 10000);
    };

    setTimeout(loop, 10000);
  }

  handleClick = (type) => {
    this.props.handler(
      this.isDescending()
        ? CONFIG[type].ascendingFunction
        : CONFIG[type].descendingFunction
    );
    this.setState({
      sortingState: this.isDescending()
        ? SORTING_STATE.ascending
        : SORTING_STATE.descending,

      currentlySortedColumn: type,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <TheHead>
        <tr>
          <TitleRank
            className={"collapsing"}
            onClick={() => this.handleClick("rank")}
          >
            Rank
          </TitleRank>
          <TitleName onClick={() => this.handleClick("name")}>Name</TitleName>
          <TitlePrice>Price</TitlePrice>
          <Title24Rate>24h %</Title24Rate>
          <TitleMarketCap className={"data-right collapsing"}>
            Market Cap
          </TitleMarketCap>
        </tr>
      </TheHead>
    );
  }
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
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
  }
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
