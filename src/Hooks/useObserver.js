import { useEffect } from "react";

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
    }
  }, [data, loading, error]);
};
