import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
);
