import React, { Component } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Table from "./components/Table/Table";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
      icons: [],
    };
  }

  getItems = async (API_LINK, BODY) => {
    try {
      let response = await (await fetch(API_LINK, BODY)).json();

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

    // Include data asap:
    this.getItems(API_LINK, BODY);

    // Start refreshing data:
    const loop = () => {
      this.getItems(API_LINK, BODY);
      setTimeout(loop, 1000);
    };

    setTimeout(loop, 1000);
  }

  render() {
    return (
      <div className="root">
        <GlobalStyle />
        <Table items={this.state.items} isLoading={this.state.isLoading} />
      </div>
    );
  }
}
