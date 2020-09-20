import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Global, css } from "@emotion/core";
import { reset } from "./resetCss";

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${reset}
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
