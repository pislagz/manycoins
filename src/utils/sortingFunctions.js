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
};
