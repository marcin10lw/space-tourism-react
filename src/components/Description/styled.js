import styled from "styled-components";

export const StyledDescription = styled.p`
  margin: 0;
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.blue};
`;
