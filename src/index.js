import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { resolvers } from "./resolvers";
import { InMemoryCache } from "apollo-cache-inmemory";

console.log(process.env.REACT_APP_API_ENDPOINT);
//add the uri here
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: process.env.REACT_APP_API_ENDPOINT || "http://localhost:4000/graphql",
  resolvers,
  onError: ({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      console.log("graphQLErrors", graphQLErrors[0]);
    }
    console.log("networkError", networkError);
  },
});

cache.writeData({
  data: {
    formData: {
      date: "",
      email: "",
      customer: [],
      __typename: "formData",
    },
  },
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    if (this.props.sentError && this.props.sentError.length > 1) {
      this.setState({ hasError: true });
    }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
