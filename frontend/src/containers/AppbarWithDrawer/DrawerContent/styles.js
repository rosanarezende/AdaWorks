import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  position: relative;
  min-height: 93vh;

  @media screen and (max-width: 1200px) {
    min-height: 91vh;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
`;

export const AvatarStyled = styled(Avatar)`
  background-color: #a3b0fe;
  width: 100px;
  height: auto;
  margin-bottom: 1vh;
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  li {
    padding: 8px 0;
  }
`;

export const ScheduleAvatar = styled(Avatar)`
  background-color: #eef2fd;
  padding: 15px;
  width: 60px;
  height: auto;
  margin-right: 10px;
`;

export const ScheduleAvatar2 = styled(Avatar)`
  background-color: #ffefd6;
  padding: 15px;
  width: 60px;
  height: auto;
  margin-right: 10px;
`;

export const Configuration = styled.footer`
  position: absolute;
  bottom: 0;
  left: 2rem;

  display: flex;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8da1b5;

  cursor: pointer;

  img {
    margin: 15px;
  }
`;
