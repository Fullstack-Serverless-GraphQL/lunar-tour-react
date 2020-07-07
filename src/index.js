import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { resolvers } from "./resolvers";
import { InMemoryCache } from "apollo-cache-inmemory";

//add the uri here
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  resolvers,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

cache.writeData({
  data: {
    formData: {
      date: "",
      email: "",
      customer: {},
      __typename: "formData",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
