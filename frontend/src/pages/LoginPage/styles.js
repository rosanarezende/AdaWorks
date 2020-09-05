import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 60vh;

  @media screen and (max-width: 1200px) {
    min-height: 65vh;
    flex-direction: column-reverse;
  }
`;

export const Image = styled.img`
  height: 100%;

  @media screen and (max-width: 1200px) {
    width: 30%;
    height: auto;
    margin-top: 5vh;
  }

  @media screen and (max-width: 800px) {
    width: 50%;
  }
`;

export const Form = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2vh;

  @media screen and (max-width: 1200px) {
    width: 70%;
    margin-top: 5vh;
  }
`;

export const InputWrapper = styled(TextField)`
  width: 40%;
  margin: 12px auto;

  @media screen and (max-width: 1600px) {
    width: 60%;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled(Button)`
  width: 20%;
  height: 42px;
  border-radius: 2px;
  margin: 16px auto 32px;

  @media screen and (max-width: 1600px) {
    width: 30%;
  }

  @media screen and (max-width: 1200px) {
    width: 50%;
  }
`;

export const Link = styled(Button)`
  font-weight: 700;
`;
