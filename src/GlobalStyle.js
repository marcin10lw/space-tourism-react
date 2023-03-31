import { createGlobalStyle, css } from "styled-components";
import homeBackgroundDesktop from "./assets/home/background-home-desktop.jpg";
import destinationBackgroundDesktop from "./assets/destination/background-destination-desktop.jpg";
import crewBackgroundDesktop from "./assets/crew/background-crew-desktop.jpg";
import technologyBackgroundDesktop from "./assets/technology/background-technology-desktop.jpg";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Barlow Condensed", sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background: #0a0a0a;
  }

  #root {
    height: 100vh;

    ${({ path }) =>
      path === "/home" &&
      css`
        background: no-repeat fixed center / cover url(${homeBackgroundDesktop});
      `}
    ${({ path }) =>
      path === "/destination" &&
      css`
        background: no-repeat fixed center / cover
          url(${destinationBackgroundDesktop});
      `}
    ${({ path }) =>
      path === "/crew" &&
      css`
        background: no-repeat fixed center / cover url(${crewBackgroundDesktop});
      `}
    ${({ path }) =>
      path === "/technology" &&
      css`
        background: no-repeat fixed center / cover
          url(${technologyBackgroundDesktop});
      `}
  }
`;

export default GlobalStyle;
