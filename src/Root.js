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
        <Table items={this.state.items} isLoading={this.state.isLoading} />
      </div>
    );
  }
}
