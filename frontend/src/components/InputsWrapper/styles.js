import styled from 'styled-components';
import { TextField } from "@material-ui/core";

export const InputsWrapper = styled.div`
  width: 60%;
  margin: 0 auto 5vh;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  @media screen and (max-width: 1600px) {
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    /* margin-bottom: 3vh; */
  }
`;

export const Input = styled(TextField)`
  width: 40%;
  margin: 12px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
