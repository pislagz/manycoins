import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Table from "./components/Table";
import NoFavorites from "./components/Table/NoFavorites/NoFavorites";
import { Logo } from "components/Logo";
import { ViewMore } from "components/ViewMore";
import { GET_COINS } from "graphql/queries";
import { useQuery } from "@apollo/client";
import { useFavorites } from "Hooks/useFavorites";
import { useSort } from "Hooks/useSort";
import { THEME_STATE } from "constants/sorting";
import { useObserver } from "Hooks/useObserver";
import { Footer } from "components/Footer";
import { Filler } from "components/Filler";
// import { ThemeProvider } from "styled-components";

export const Root = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const {
    sortBy,
    sortDir,
    switchSortingState,
    switchSortingDir,
    coinsCount,
    setCoinsCount,
  } = useSort();
  const [favorites, handleFavClick] = useFavorites(setItems);
  const [theme, setTheme] = useState(THEME_STATE.lightTheme);
  const { data, loading, error } = useQuery(GET_COINS, {
    variables: {
      first: coinsCount,
      dir: sortDir,
      sortBy: sortBy,
      before: null,
      after: null,
      where: onlyFavorites ? { id_in: favorites } : null, //  if onlyFavorites are displayed, change the query to return only favorites
    },
  });

  useObserver(data, loading, error, setIsLoading, setItems);

  const refreshRate = () => 1000 * 15; // means there's an API call every 15 seconds

  //Changing views between list of all coins and a list of favorite coins
  const handleSwitchFavorites = () => {
    setOnlyFavorites((prevState) => !prevState);
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

  return (
    <div className="root">
      {/* <ThemeProvider theme={THEME_STATE[theme]}> */}
      <GlobalStyle />
      <Logo handleThemeSwitch={handleThemeSwitch} />
      <div className={"table-wrapper"}>
        <Table
          refreshRate={() => refreshRate()}
          items={items}
          isLoading={isLoading}
          handleFavClick={handleFavClick}
          favorites={favorites}
          handleSwitchFavorites={handleSwitchFavorites}
          onlyFavorites={onlyFavorites}
          switchSortingState={switchSortingState}
          switchSortingDir={switchSortingDir}
        />
      </div>
      {onlyFavorites ? null : (
        <ViewMore setCoinsCount={setCoinsCount} coinsCount={coinsCount} />
      )}
      {onlyFavorites && !favorites.length ? (
        <NoFavorites handleSwitchFavorites={handleSwitchFavorites} />
      ) : null}
      {!onlyFavorites ? null : favorites.length ===
        0 ? null : favorites.length > 5 ? null : (
        <Filler
          mockRows={favorites.length !== undefined ? 16 - favorites.length : 16}
        />
      )}

      <Footer />
      {/* </ThemeProvider> */}
    </div>
  );
};
