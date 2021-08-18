import { SORTING_STATE, SORTING_DIR } from "utils/configs";
import { useState } from "react";

export const useSort = () => {
  const [sortBy, setSortBy] = useState(SORTING_STATE.rank);
  const [sortDir, setSortDir] = useState(SORTING_DIR.ascending);

  //Switching sorting state
  const switchSortingState = (sortBy) => {
    setSortBy(SORTING_STATE[sortBy]);
  };

  //Switching sorting direction
  const switchSortingDir = (sortAs) => {
    setSortDir(SORTING_DIR[sortAs]);
  };

  return {
    sortBy,
    sortDir,
    switchSortingState,
    switchSortingDir
  };
};
