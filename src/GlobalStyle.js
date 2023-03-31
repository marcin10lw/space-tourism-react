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
    font-family: "Barlow Condensed", sans-serif;
    height: 100vh;
    background-image: url(${homeBackgroundDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.white}
  }
`;

export default GlobalStyle;
