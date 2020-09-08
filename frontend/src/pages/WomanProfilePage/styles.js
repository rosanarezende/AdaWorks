import styled from "styled-components";
import { Avatar, Typography } from "@material-ui/core";

export const Header = styled.div`
  background: #7a8dff;
  margin: -36px -24px 0;
  padding: 36px 10vw;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const AvatarStyled = styled(Avatar)`
  background-color: #a3b0fe;
  width: 200px;
  height: auto;
`;

export const ExperienceLogo = styled(Avatar)`
  background-color: #a3b0fe;
  width: 70px;
  height: auto;
  margin: 0 20px 4vh 0;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 9vw 0;

  @media screen and (max-width: 1200px) {
    padding: 5vh 4vw 0;
  }
`;

export const Title = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 75%;
  color: #000000;
  margin-bottom: 2vh;
`;

export const Text = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 130%;
  color: #636363;
  margin-bottom: 4vh;
  text-align: justify;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  div {
    display: flex;
    align-items: center;
  }
  img {
    height: auto;
    width: 70px;
    margin: 0 20px 5vh 0;
  }
`
