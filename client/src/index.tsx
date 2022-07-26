import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import App from "./App";
import { Provider } from "react-redux";
import redux from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={redux.store}>
    <PersistGate persistor={redux.persistor}></PersistGate>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
