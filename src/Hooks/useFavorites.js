import { useState } from "react";

export const useFavorites = (setItems) => {
  const [favorites, setFavorites] = useState([]);

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
