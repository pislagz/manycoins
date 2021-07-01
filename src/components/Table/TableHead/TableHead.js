import React, { Component } from "react";
import styled from "styled-components";
import { sortDownByRank, sortUpByRank } from "../../../utils/sortingFunctions";

const SORTING_STATE = {
  descending: "descending",
  ascending: "ascending",
};

export default class TableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankSortingState: SORTING_STATE.descending,
    };
  }

  handleClick = () => {
    const isDescending =
      this.state.rankSortingState === SORTING_STATE.descending;

    this.props.handler(isDescending ? sortDownByRank : sortUpByRank);
    this.setState({
      rankSortingState: isDescending
        ? SORTING_STATE.ascending
        : SORTING_STATE.descending,
    });
  };

  render() {
    return (
      <TheHead>
        <tr>
          <TitleRank className={"collapsing"} onClick={this.handleClick}>
            Rank
          </TitleRank>
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
