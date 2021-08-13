import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./Root";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../src/graphql/apollo";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Root />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
