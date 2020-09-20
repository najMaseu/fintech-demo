import { css, Global } from "@emotion/core";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./redux/store/Store";
import { reset } from "./resetCss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
