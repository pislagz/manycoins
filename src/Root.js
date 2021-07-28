import React, { Component } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Table from "./components/Table/Table";
import Logo from "./components/Logo/Logo";
import NoFavorites from "./components/Table/NoFavorites/NoFavorites";
// import { ThemeProvider } from "styled-components";

const THEME_STATE = {
  lightTheme: "lightTheme",
  darkTheme: "darkTheme",
};

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      favorites: [],
      isLoading: true,
      onlyFavorites: false,
      theme: THEME_STATE.lightTheme,
    };

    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", "[]");
    }

    this.isLightThemeEnabled = () =>
      this.state.sortingState === THEME_STATE.light;
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

  //Adding a coin to favorites
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

  //Changing views between list of all coins and a list of favorite coins
  handleSwitchFavorites = () => {
    this.setState({ onlyFavorites: !this.state.onlyFavorites });
  };

  //Toggle theme
  handleThemeSwitch = () => {
    if (this.state.theme === THEME_STATE.lightTheme) {
      this.setState({ theme: THEME_STATE.darkTheme });
    } else {
      this.setState({ theme: THEME_STATE.lightTheme });
    }
  };

  componentDidMount() {
    if (localStorage.getItem("data") !== "null") {
      let data = JSON.parse(localStorage.getItem("data"));
      this.setState({ favorites: data });
    } else {
      this.setState({ favorites: [] });
    }
  }

  componentDidUpdate() {
    console.log(
      this.state.theme === "light" ? "Light mode enabled" : "Dark mode enabled"
    );
  }

  render() {
    return (
      <div className="root">
        {/* <ThemeProvider theme={THEME_STATE[this.state.theme]}> */}
        <GlobalStyle />
        <Logo handleThemeSwitch={this.handleThemeSwitch} />
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
          {this.state.onlyFavorites && !this.state.favorites.length ? (
            <NoFavorites handleSwitchFavorites={this.handleSwitchFavorites} />
          ) : null}
        </div>
        {/* </ThemeProvider> */}
      </div>
    );
  }
}
