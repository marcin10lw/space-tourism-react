import styled from "styled-components";

export const Description = styled.p`
  margin: 0;
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.blue};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
