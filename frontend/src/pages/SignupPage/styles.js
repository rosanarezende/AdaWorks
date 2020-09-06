import styled from 'styled-components';
import { Button, Typography } from "@material-ui/core";

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  margin: auto;
  padding: 5vh 0;
  min-height: 60vh;

  @media screen and (max-width: 1600px) {
    width: 60%;
  }

  @media screen and (max-width: 1200px) {
    min-height: 67vh;
    width: 70%;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 1rem;
  border-radius: 10%;
  min-width: 15vw;
  cursor: pointer;
  border: 1px solid rgba(102, 102, 102, 0.1);
  box-shadow: 5px 5px rgba(102, 102, 102, 0.1);
  outline: 0;

  transition: all .2s ease-in-out;
  :hover{
    transform: scale(1.1);
  }

  @media screen and (max-width: 900px) {
    width: 35vw;
  }
`

export const Title = styled(Typography)`
  font-size: min(36px, 6.5vw);
`

export const Text = styled(Typography)`
  margin-top: 2vh;
  font-weight: 500;

  @media screen and (max-width: 900px) {
    margin-top: 0;
  }
`

export const Link = styled(Button)`
  font-weight: 700;
`;
