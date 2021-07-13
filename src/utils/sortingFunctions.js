export const CONFIG = {
  rank: {
    descendingFunction: (data) => data.sort((a, b) => b.rank - a.rank),
    ascendingFunction: (data) => data.sort((a, b) => a.rank - b.rank),
  },

  name: {
    descendingFunction: (data) =>
      data
        .sort((a, b) => {
          return ("" + a.name).localeCompare(b.name);
        })
        .reverse(),
    ascendingFunction: (data) =>
      data.sort((a, b) => {
        return ("" + a.name).localeCompare(b.name);
      }),
  },

  price: {
    descendingFunction: (data) => data.sort((a, b) => b.priceUsd - a.priceUsd),
    ascendingFunction: (data) => data.sort((a, b) => a.priceUsd - b.priceUsd),
  },

  change24: {
    descendingFunction: (data) =>
      data.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr),
    ascendingFunction: (data) =>
      data.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr),
  },

  marketCap: {
    descendingFunction: (data) =>
      data.sort((a, b) => b.marketCapUsd - a.marketCapUsd),
    ascendingFunction: (data) =>
      data.sort((a, b) => a.marketCapUsd - b.marketCapUsd),
  },
};
