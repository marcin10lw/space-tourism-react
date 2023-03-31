import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
  </ThemeProvider>
);
