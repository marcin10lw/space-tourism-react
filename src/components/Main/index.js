import styled from "styled-components";

export const Main = styled.main`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 24px;
  }
`;
