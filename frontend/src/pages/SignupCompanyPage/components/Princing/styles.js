import styled from "styled-components";
import { Container, CardHeader } from "@material-ui/core";

export const ContainerStyled = styled(Container)`
  padding-bottom: 5vh;
`;

export const CardHeaderStyled = styled(CardHeader)`
  background-color: #a3b0fe;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;

  li {
    div {
      min-width: 0;
      margin-left: 10px;
    }
  }

  div {
    margin: 0;
  }
`;
