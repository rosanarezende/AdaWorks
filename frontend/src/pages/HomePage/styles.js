import styled from "styled-components";

export const SectionOne = styled.section`
  height: 82vh;
  display: flex;
  align-items: flex-end;
  padding-bottom: 10vh;

  @media screen and (max-width: 1200px) {
    height: 90vh;
    flex-direction: column;
    padding-bottom: 0;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: Abhaya Libre Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 6vw;
  line-height: 112%;
  color: #7a8dff;
  margin: 0;

  @media screen and (max-width: 800px) {
    font-size: 12vw;
  }
`;

export const Logo = styled.img`
  min-width: 40vw;
  margin-left: 2vw;

  @media screen and (max-width: 1200px) {
    width: 90vw;
    margin-left: 0;
    padding-top: 5vh;
  }
`;

export const SectionFour = styled.section`
  padding: 5vh 0 0;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

export const Subtitle = styled.h2`
  font-family: Abhaya Libre Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 3.5vw;
  line-height: 115%;
  color: #272d4e;
  margin: 0;
  text-align: center;

  span {
    color: #7a8dff;
  }

  @media screen and (max-width: 1200px) {
    font-size: 4vw;
  }
`;

export const Image = styled.img`
  padding: 5vh 0;
  width: 100%;
`;
