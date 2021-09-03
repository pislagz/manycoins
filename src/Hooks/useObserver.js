import { useEffect } from "react";
import { CURSOR } from "utils/cursors.js";

export const useObserver = (data, loading, error, setIsLoading, setItems) => {
  useEffect(() => {
    // console.log(`graphql-coins:`);
    // console.log(data);

    // if (loading) {
    //   console.log(`fetching graphql data...`);
    // }

    if (!loading) {
      setIsLoading(false);
    }

    // if (error) {
    //   console.log(`Uh oh! ${error}! :(`);
    // }

    if (!loading && !error) {
      setItems(data.object.coinsArray.map((e) => e.coin));

      let pageInfo = data.object.pageInfo;

      CURSOR.endCursor = pageInfo.endCursor;
      CURSOR.startCursor = pageInfo.startCursor;
      CURSOR.hasNextPage = pageInfo.hasNextPage;
      CURSOR.hasPreviousPage = pageInfo.hasPreviousPage;

      console.log(CURSOR);
    }
  }, [data, loading, error, setIsLoading, setItems]);
};
