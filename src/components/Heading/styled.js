import styled from "styled-components";

export const StyledHeading = styled.h1`
  margin: 76px 0 0 11.5%;
  font-size: 28px;
  letter-spacing: 4.72px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`;

export const HeadingNumber = styled.span`
  margin-right: 28px;
`;
