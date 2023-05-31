import { createGlobalStyle, css } from "styled-components";

import homeBackgroundDesktop from "./assets/home/background-home-desktop.jpg";
import homeBackgroundTablet from "./assets/home/background-home-tablet.jpg";
import homeBackgroundMobile from "./assets/home/background-home-mobile.jpg";

import destinationBackgroundDesktop from "./assets/destination/background-destination-desktop.jpg";
import destinationBackgroundTablet from "./assets/destination/background-destination-tablet.jpg";
import destinationBackgroundMobile from "./assets/destination/background-destination-mobile.jpg";

import crewBackgroundDesktop from "./assets/crew/background-crew-desktop.jpg";
import crewBackgroundTablet from "./assets/crew/background-crew-tablet.jpg";
import crewBackgroundMobile from "./assets/crew/background-crew-mobile.jpg";

import technologyBackgroundDesktop from "./assets/technology/background-technology-desktop.jpg";
import technologyBackgroundTablet from "./assets/technology/background-technology-tablet.jpg";
import technologyBackgroundMobile from "./assets/technology/background-technology-mobile.jpg";

type GlobalStyleProps = {
  path: string | "/home" | "/destination" | "/crew" | "/technology";
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Barlow Condensed", sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background: #0b0e17;
  }

  #root {
    height: 100vh;
    position: relative;
    overflow: hidden;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      height: auto;
      min-height: 100vh;
    }

    ${({ path }) =>
      path === "/home" &&
      css`
        background: no-repeat fixed center / cover url(${homeBackgroundDesktop});

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
          background-image: url(${homeBackgroundTablet});
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
          background-image: url(${homeBackgroundMobile});
        }
      `}

    ${({ path }) =>
      path === "/destination" &&
      css`
        background: no-repeat fixed center / cover
          url(${destinationBackgroundDesktop});

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
          background-image: url(${destinationBackgroundTablet});
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
          background-image: url(${destinationBackgroundMobile});
        }
      `}

    ${({ path }) =>
      path === "/crew" &&
      css`
        background: no-repeat fixed center / cover url(${crewBackgroundDesktop});

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
          background-image: url(${crewBackgroundTablet});
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
          background-image: url(${crewBackgroundMobile});
        }
      `}

    ${({ path }) =>
      path === "/technology" &&
      css`
        background: no-repeat fixed center / cover
          url(${technologyBackgroundDesktop});

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
          background-image: url(${technologyBackgroundTablet});
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
          background-image: url(${technologyBackgroundMobile});
        }
      `}
  }
`;

export default GlobalStyle;
