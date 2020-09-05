import styled from 'styled-components';

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

  @media screen and (max-width: 1600px) {
    font-size: 1.5vw;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin: 5vh 0;
    font-size: 2.5vw;
  }

  @media screen and (max-width: 600px) {
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
    text-align: center;

    img {
      width: 60%;
      margin: 0 auto 1vh;
    }
  }

  @media screen and (max-width: 600px) {
    width: 80vw;
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

  @media screen and (max-width: 1600px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 5vw;
  }
`;
