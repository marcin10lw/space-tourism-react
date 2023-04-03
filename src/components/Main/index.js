import styled from "styled-components";

export const Main = styled.main`
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 24px;
  }
`;
