/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.css";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { rootReducer } from "./reducers/rootReducer";

import App from "./components/App/index";
import * as serviceWorker from "./serviceWorker";


const store = createStore(rootReducer);

store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log(store.getState());
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
