import styled from "styled-components";
import { Paper, Typography, Card } from "@material-ui/core";

export const PaperStyled = styled(Paper)`
  padding: 2rem 3rem;
  width: 70vw;
  margin: 2vh auto;

  @media screen and (max-width: 1200px) {
    width: 80vw;
  }

  @media screen and (max-width: 800px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  > div {
    display: flex;
    align-items: center;
    @media screen and (max-width: 800px) {
      margin-bottom: 2vh;
    }
  }

  @media screen and (max-width: 800px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const Logo = styled.img`
  height: 100px;
  width: auto;
  margin-right: 20px;
`;

export const CompanyName = styled(Typography)`
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 5px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const CompanyDescription = styled(Typography)`
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #636363;
  @media screen and (max-width: 800px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Evaluation = styled(Typography)`
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #636363;
  margin-right: 10px;
`;

export const Stars = styled.img`
  height: 15px;
`;

export const CardStyled = styled(Card)`
  padding: 1.5rem;
  margin-bottom: 1rem;
  &:last-child{
    margin-bottom: 0;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }
`;

export const Title = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  text-transform: uppercase;
  color: #636363;
  margin-bottom: 1rem;
`;

export const Text = styled(Typography)`
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #636363;
  text-align: justify;
  margin-bottom: 5px;
`;
