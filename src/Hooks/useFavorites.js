import { useState } from "react";

/*
 * If localStorage's favorites array isn't empty,
 * use its contents to populate favorites state,
 * else return no favorites.
 */

export const useFavorites = (setItems) => {
  const [favorites, setFavorites] = useState(() => {
    if (
      localStorage.getItem("data") !== null &&
      localStorage.getItem("data") !== "undefined"
    ) {
      let data = JSON.parse(localStorage.getItem("data"));
      return data;
    } else {
      return [];
    }
  });

  const handleFavClick = (id) => {
    const handleChange = (arr, id) => {
      const tempArr = arr;

      if (tempArr) {
        if (tempArr.includes(id)) {
          tempArr.splice(tempArr.indexOf(id), 1);
        } else {
          tempArr.push(id);
        }

        return tempArr;
      }
    };

    const newArray = handleChange(favorites, id);

    localStorage.setItem("data", JSON.stringify(newArray));

    setFavorites(newArray);
    setItems((prevState) => [...prevState]);
  };

  return [favorites, handleFavClick, setFavorites];
};
