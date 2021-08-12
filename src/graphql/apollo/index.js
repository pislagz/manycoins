import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_API_URL = "https://graphql.coincap.io/";

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});
