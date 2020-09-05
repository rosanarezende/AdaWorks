import styled from "styled-components";
import { AppBar, Toolbar } from "@material-ui/core";

export const AppBarStyled = styled(AppBar)`
  padding-top: 10vh;
  height: 18vh;

  @media screen and (max-width: 1200px) {
    padding-top: 2vh;
    height: 10vh;
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  padding: 0;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  cursor: pointer;
  margin-top: 25px;

  @media screen and (max-width: 1200px) {
    height: 30px;
    margin-top: 15px;
  }
`;

export const DivGrow = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const SectionDesktop = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const SectionMobile = styled.div`
  display: none;
  @media screen and (max-width: 1200px) {
    display: flex;
  }
`;

export const LinkStyled = styled.div`
  color: #7a8dff;

  &:last-child {
    color: transparent;
  }
`;
