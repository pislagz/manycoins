import React, { Component } from "react";
import styled from "styled-components";
import {
  Collapsing,
  CustomBelow770px,
} from "../../../styles/GlobalStyleSnippets";
import { CONFIG } from "../../../utils/sortingFunctions";
import { Favorite, NoFavorite } from "../Star/Star";

const SORTING_STATE = {
  descending: "descending",
  ascending: "ascending",
};

export default class TableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingState: SORTING_STATE.ascending,
      currentlySortedColumn: "rank",
    };
    this.isDescending = () =>
      this.state.sortingState === SORTING_STATE.descending;
  }

  componentDidMount() {
    const API_LINK = `https://api.coincap.io/v2/assets`; //?limit=100 (max 2000)
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
          <TitleFavs>
            <Wrapper onClick={() => this.props.handleSwitchFavorites()}>
              {this.props.onlyFavorites ? <Favorite /> : <NoFavorite />}
            </Wrapper>
          </TitleFavs>
          <TitleRank>
            <Wrapper>
              <p onClick={() => this.handleClick("rank")}>Rank</p>
              <Arrow
                direction={this.state.sortingState}
                isVisible={this.state.currentlySortedColumn === "rank"}
              />
            </Wrapper>
          </TitleRank>
          <TitleName>
            <Wrapper>
              <p onClick={() => this.handleClick("name")}>Name</p>
              <Arrow
                direction={this.state.sortingState}
                isVisible={this.state.currentlySortedColumn === "name"}
              />
            </Wrapper>
          </TitleName>
          <TitlePrice>
            <Wrapper>
              <p onClick={() => this.handleClick("price")}>Price</p>
              <Arrow
                direction={this.state.sortingState}
                isVisible={this.state.currentlySortedColumn === "price"}
              />
            </Wrapper>
          </TitlePrice>
          <Title24Rate>
            <Wrapper>
              <p onClick={() => this.handleClick("change24")}>24h&nbsp;%</p>
              <Arrow
                direction={this.state.sortingState}
                isVisible={this.state.currentlySortedColumn === "change24"}
              />
            </Wrapper>
          </Title24Rate>
          <TitleMarketCap>
            <Wrapper>
              <p onClick={() => this.handleClick("marketCap")}>
                <Arrow
                  direction={this.state.sortingState}
                  isVisible={this.state.currentlySortedColumn === "marketCap"}
                />
                Market&nbsp;Cap
              </p>
            </Wrapper>
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

const TitleFavs = styled.th`
  padding-left: 1rem !important;
  text-align: center;
  font-size: 1.5rem;
  div {
    cursor: pointer;

    img {
      margin: 0.7rem;
      margin-left: 0;
    }
  }
`;

const TitleRank = styled.th`
  ${Collapsing}
  div {
    /* justify-content: center; */
  }
`;
const TitleName = styled.th`
  div {
    justify-content: flex-start;
    p {
      margin-left: 0.5rem;
      ${CustomBelow770px(`margin-left: 0;`)}
    }
  }
`;
const TitlePrice = styled.th``;

const Title24Rate = styled.th`
  ${CustomBelow770px(`div {
    justify-content: center;
  }`)}
`;

const TitleMarketCap = styled.th`
  ${Collapsing}
  div {
    justify-content: center;
  }

  img {
    right: -104%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p {
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: relative;
    &:hover {
      transform: scale(105%);
      transition: transform 0.1s;
    }
    &:active {
      transform: scale(95%);
      transition: transform 0.1s;
    }
  }
`;

const StyledArrow = styled.img`
  width: 6px;
  height: 6px;
  position: relative;
  right: -5px;
  bottom: -2px;
  opacity: ${(props) => (props.isVisible ? "100" : "0")}%;
  transition: 0.3s opacity ease;
  transform: ${(props) =>
    props.direction === "descending" ? "rotate(90deg)" : "rotate(-90deg)"}; ;
`;

const Arrow = (props) => {
  return (
    <StyledArrow
      direction={props.direction}
      isVisible={props.isVisible}
      src={"/assets/play.svg"}
    />
  );
};
