import "antd/dist/antd.css";
import "./assets/sass/main.scss";

import React from "react";
import ReactDOM from "react-dom";
import {QueryCache, ReactQueryCacheProvider} from "react-query";

import {Provider} from "react-redux";
import App from "./App";
import api from "./services/api";
import store from "./Store";
const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowsFocus: false,
      retry: 0,
    },
  },
});
api.subscribe(store);
ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <Provider store={store}>
      <App />
    </Provider>
  </ReactQueryCacheProvider>,
  document.getElementById("root")
);
