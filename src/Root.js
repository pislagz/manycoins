import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Table from "./components/Table/Table";
import Logo from "./components/Logo/Logo";
import NoFavorites from "./components/Table/NoFavorites/NoFavorites";
import { Pagination } from "./components/Pagination";
import { GET_COINS } from "graphql/queries";
import { useQuery } from "@apollo/client";
// import { ThemeProvider } from "styled-components";

const THEME_STATE = {
  lightTheme: "lightTheme",
  darkTheme: "darkTheme",
};

const SORTING_STATE = {
  rank: "rank",
  name: "name",
  price: "priceUsd",
  change24: "changePercent24Hr",
  marketCap: "marketCapUsd",
};

const SORTING_DIR = {
  ascending: "ASC",
  descending: "DESC",
};

export const Root = () => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState(SORTING_STATE.rank);
  const [sortDir, setSortDir] = useState(SORTING_DIR.ascending);
  const [pages] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPageLocal")
      ? parseInt(localStorage.getItem("currentPageLocal"))
      : 1
  );
  const [theme, setTheme] = useState(THEME_STATE.lightTheme);

  const { data, loading, error } = useQuery(GET_COINS, {
    variables: {
      dir: sortDir,
      sortBy: sortBy,
      before: null,
      after: null,
      where: null, //{"id_in": ["bitcoin","xrp"]}
    },
  });

  useEffect(() => {
    console.log(`graphql-coins:`);
    console.log(data);

    if (loading) {
      console.log(`fetching graphql data...`);
    }

    if (!loading) {
      setIsLoading(false);
    }

    if (error) {
      console.log(`Uh oh! ${error}! :(`);
    }

    if (!loading && !error) {
      setItems(data.object.coinsArray.map((e) => e.coin));
    }
  }, [data, loading, error]);

  const refreshRate = () => 1000 * 15; // means there's an API call every 15 seconds

  //Sorting
  const handleClick = (sortingFunction) => {
    setItems((prevState) => sortingFunction(prevState.items));
  };

  //Adding a coin to favorites
  const handleFavClick = (id) => {
    let tempArray = favorites;

    if (tempArray?.includes(id)) {
      tempArray?.splice(tempArray.indexOf(id), 1);
    } else {
      tempArray?.push(id);
    }
    setFavorites(tempArray);
    localStorage.setItem("data", JSON.stringify(tempArray));
  };

  //Changing views between list of all coins and a list of favorite coins
  const handleSwitchFavorites = () => {
    setOnlyFavorites((prevState) => !prevState);
  };

  //Switching sorting state
  const switchSortingState = (sortBy) => {
    setSortBy(SORTING_STATE[sortBy]);
  };

  //Switching sorting direction
  const switchSortingDir = (sortAs) => {
    setSortDir(SORTING_DIR[sortAs]);
  };

  //Toggle theme
  const handleThemeSwitch = () => {
    if (theme === THEME_STATE.lightTheme) {
      setTheme(THEME_STATE.darkTheme);
      console.log(`Dark theme enabled.`);
    } else {
      setTheme(THEME_STATE.lightTheme);
      console.log(`Light theme enabled.`);
    }
  };

  //Change page
  const changePage = (pageIndex) => {
    /*
     *   if given index is lower than minimal possible page
     *   return minimal possible page, and if it's higher
     *   than the highest possible, return the highest
     */

    if (pageIndex < pages[0]) {
      setCurrentPage(pages[0]);
      localStorage.setItem("currentPageLocal", `${pages[0]}`);
    } else if (pageIndex > pages[pages.length - 1]) {
      setCurrentPage(pages[pages.length - 1]);
      localStorage.setItem("currentPageLocal", `${pages[pages.length - 1]}`);
    } else {
      setCurrentPage(pageIndex);
      localStorage.setItem("currentPageLocal", `${pageIndex}`);
    }
  };

  //Pages list to print out
  const printPages = () => {
    let arrX = [];
    if (
      pages.indexOf(currentPage - 5) !== -1 &&
      pages.indexOf(currentPage + 4) !== -1
    ) {
      arrX = [];
      arrX.push(pages[currentPage - 5]);
      arrX.push(pages[currentPage - 4]);
      arrX.push(pages[currentPage - 3]);
      arrX.push(pages[currentPage - 2]);
      arrX.push(pages[currentPage - 1]);
      arrX.push(pages[currentPage]);
      arrX.push(pages[currentPage + 1]);
      arrX.push(pages[currentPage + 2]);
      arrX.push(pages[currentPage + 3]);
      arrX.push(pages[currentPage + 4]);
    }

    if (
      pages.indexOf(currentPage - 5) === -1 &&
      pages.indexOf(currentPage + 4) !== -1
    ) {
      arrX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    if (currentPage >= pages[pages.length - 5]) {
      arrX = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    }

    return arrX;
  };

  useEffect(() => {
    if (localStorage.getItem("data") !== "null") {
      let data = JSON.parse(localStorage.getItem("data"));
      setFavorites(data);
    } else {
      setFavorites([]);
    }
  }, []);

  return (
    <div className="root">
      {/* <ThemeProvider theme={THEME_STATE[theme]}> */}
      <GlobalStyle />
      <Logo handleThemeSwitch={handleThemeSwitch} />
      <div className={"table-wrapper"}>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          changePage={changePage}
          printPages={printPages}
        />

        <Table
          refreshRate={() => refreshRate()}
          items={items}
          isLoading={isLoading}
          handler={handleClick}
          handleFavClick={handleFavClick}
          favorites={favorites}
          handleSwitchFavorites={handleSwitchFavorites}
          onlyFavorites={onlyFavorites}
          currentPage={currentPage}
          switchSortingState={switchSortingState}
          switchSortingDir={switchSortingDir}
        />
        {onlyFavorites && !favorites.length ? (
          <NoFavorites handleSwitchFavorites={handleSwitchFavorites} />
        ) : null}
      </div>
      {/* </ThemeProvider> */}
    </div>
  );
};
