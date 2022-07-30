import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
