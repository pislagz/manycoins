import { gql } from "@apollo/client";

export const GET_COINS = gql`
  query getCoins(
    $dir: SortDirection
    $sortBy: AssetSortInput
    $before: String
    $after: String
  ) {
    object: assets(
      first: 50
      direction: $dir
      sort: $sortBy
      before: $before
      after: $after
    ) {
      loadedCoins: totalCount
      pageInfo {
        hasPreviousPage
        startCursor
        hasNextPage
        endCursor
      }
      coinsArray: edges {
        cursor
        coin: node {
          ...coinData
        }
      }
    }
  }

  fragment coinData on Asset {
    rank
    id
    name
    symbol
    priceUsd
    changePercent24Hr
    marketCapUsd
  }

  # rank name price ch24 marketcap
`;
