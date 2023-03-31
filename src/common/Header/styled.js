import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 40px 0 0 40px;
  display: grid;
  grid-template-columns: auto repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const DecorationLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.25;
  margin: 0 -35px 0 64px;
  z-index: 99;
`;
