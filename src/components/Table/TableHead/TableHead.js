import React, { Component } from "react";
import styled from "styled-components";
import { CONFIG } from "../../../utils/sortingFunctions";
import {
  Collapsing,
  ClickableHeader,
} from "../../../styles/GlobalStyleSnippets";

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
      setTimeout(loop, this.props.refreshRate());
    };

    setTimeout(loop, this.props.refreshRate());
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
          <TitleRank onClick={() => this.handleClick("rank")}>Rank</TitleRank>
          <TitleName onClick={() => this.handleClick("name")}>Name</TitleName>
          <TitlePrice onClick={() => this.handleClick("price")}>
            Price
          </TitlePrice>
          <Title24Rate onClick={() => this.handleClick("change24")}>
            24h&nbsp;%
          </Title24Rate>
          <TitleMarketCap onClick={() => this.handleClick("marketCap")}>
            Market&nbsp;Cap
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
  ${Collapsing};
  ${ClickableHeader};
  text-align: center;
  width: 5%;
`;
const TitleName = styled.th`
  ${ClickableHeader};
  text-align: left;
  width: 40%;
`;
const TitlePrice = styled.th`
  ${ClickableHeader};
  width: 45%;
`;

const Title24Rate = styled.th`
  ${ClickableHeader};
  text-align: right;
  width: 5%;
`;

const TitleMarketCap = styled.th`
  ${ClickableHeader};
  ${Collapsing};
  text-align: right;
  width: 5%;
`;
