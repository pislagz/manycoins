export const CONFIG = {
  rank: {
    ascendingFunction: (data) => data.sort((a, b) => b.rank - a.rank),
    descendingFunction: (data) => data.sort((a, b) => a.rank - b.rank),
  },

  name: {
    ascendingFunction: (data) =>
      data
        .sort((a, b) => {
          return ("" + a.name).localeCompare(b.name);
        })
        .reverse(),
    descendingFunction: (data) =>
      data.sort((a, b) => {
        return ("" + a.name).localeCompare(b.name);
      }),
  },

  price: {
    ascendingFunction: (data) => data.sort((a, b) => b.priceUsd - a.priceUsd),
    descendingFunction: (data) => data.sort((a, b) => a.priceUsd - b.priceUsd),
  },

  change24: {
    ascendingFunction: (data) =>
      data.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr),
    descendingFunction: (data) =>
      data.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr),
  },

  marketCap: {
    ascendingFunction: (data) =>
      data.sort((a, b) => b.marketCapUsd - a.marketCapUsd),
    descendingFunction: (data) =>
      data.sort((a, b) => a.marketCapUsd - b.marketCapUsd),
  },
};
