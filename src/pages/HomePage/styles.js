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

export const SectionTwo = styled.section`
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

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10vh 0;

  text-align: justify;
  font-size: 1vw;
  line-height: 167%;
  color: #94a2b3;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin: 5vh 0;
    font-size: 3vw;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1200px) {
    width: 70vw;
    margin: 2vh auto;
  }
`;

export const Topic = styled.h3`
  font-family: Abhaya Libre Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 2.5vw;
  line-height: 194%;

  color: #272d4e;
  margin: 0vh;

  @media screen and (max-width: 1200px) {
    font-size: 5vw;
  }
`;

export const SectionThree = styled.section`
  margin: 0 -10vw 2vh;
  padding: 0 10vw;

  img {
    display: block;
    width: 99.1vw;
    margin: 0 -10vw;
  }

  @media screen and (max-width: 1200px) {
    margin: 0 -5vw 5vh;
    padding: 0 5vw;

    img {
      margin: 0 -5vw;
      width: 100vw;
    }
  }
`;

export const SectionThreeContent = styled.div`
  background: #7a8dff;
  margin: -2vh -10vw;
  padding: 0 10vw 1vh;

  @media screen and (max-width: 1200px) {
    margin: 0 -5vw;
    padding: 2vh 5vw;
  }
`

export const Image = styled.img`
  padding: 5vh 0;
  width: 100%;
`;

