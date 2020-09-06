import styled from "styled-components";
import { Button, FormControlLabel } from "@material-ui/core";

export const Form = styled.form`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  padding: 5vh 0;

  @media screen and (max-width: 1200px) {
    min-height: 67vh;
    padding: 2vh 0;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto 5vh;

  @media screen and (max-width: 1600px) {
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    margin-bottom: 2vh
  }
`;

export const Option = styled(FormControlLabel)`
  color: #828282;
  text-align: justify;
  
  @media screen and (max-width: 800px) {
    margin-bottom: 12px;
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

  @media screen and (max-width: 800px) {
    width: 40%;
  }
`;
