import React, { Component } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Table from "./components/Table/Table";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };
  }

  getItems = async (API_LINK, BODY, sortingFunction) => {
    try {
      let response = await (await fetch(API_LINK, BODY)).json();

      console.log(response);

      this.setState({
        items: sortingFunction ? sortingFunction(response.data) : response.data,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Sorting
  handleClick = (sortingFunction) => {
    this.setState((prevState) => ({
      items: sortingFunction(prevState.items),
    }));
  };

  render() {
    return (
      <div className="root">
        <GlobalStyle />
        <Table
          getItems={this.getItems}
          items={this.state.items}
          isLoading={this.state.isLoading}
          handler={this.handleClick}
        />
      </div>
    );
  }
}
