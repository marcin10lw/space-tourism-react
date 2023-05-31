import styled, { css } from "styled-components";

type MainProps = {
  technology: boolean;
};

export const Main = styled.main<MainProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 24px;
  }

  ${({ technology }) =>
    technology &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 0;
      }
    `}
`;
