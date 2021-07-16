import React, { Component } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Table from "./components/Table/Table";
import Logo from "./components/Logo/Logo";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      favorites: [],
      isLoading: true,
      onlyFavorites: false,
    };

    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", "[]");
    }
  }

  refreshRate = () => 1000 * 15; // means there's an API call every 15 seconds

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

  handleFavClick = (id) => {
    let tempArray = this.state.favorites;

    if (tempArray?.includes(id)) {
      tempArray?.splice(tempArray.indexOf(id), 1);
    } else {
      tempArray?.push(id);
    }
    this.setState({ favorites: tempArray });

    localStorage.setItem("data", JSON.stringify(tempArray));
  };

  handleSwitchFavorites = () => {
    this.setState({ onlyFavorites: !this.state.onlyFavorites });
  };

  componentDidMount() {
    if (localStorage.getItem("data") !== "null") {
      let data = JSON.parse(localStorage.getItem("data"));
      this.setState({ favorites: data });
    } else {
      this.setState({ favorites: [] });
    }
  }

  render() {
    return (
      <div className="root">
        <GlobalStyle />
        <Logo />
        <div className={"table-wrapper"}>
          <Table
            refreshRate={() => this.refreshRate()}
            getItems={this.getItems}
            items={this.state.items}
            isLoading={this.state.isLoading}
            handler={this.handleClick}
            handleFavClick={this.handleFavClick}
            favorites={this.state.favorites}
            handleSwitchFavorites={this.handleSwitchFavorites}
            onlyFavorites={this.state.onlyFavorites}
          />
        </div>
      </div>
    );
  }
}
