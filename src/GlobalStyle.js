import { createGlobalStyle } from "styled-components";
import homeBackgroundDesktop from "./assets/home/background-home-desktop.jpg";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    background-image: url(${homeBackgroundDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;
