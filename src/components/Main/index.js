import styled, { css } from "styled-components";

export const Main = styled.main`
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
