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

export const SectionThree = styled.section`
  margin: 0 -10vw 2vh;
  padding: 0 10vw;
  position: relative;

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
  display: flex;
  flex-direction: column;

  font-family: Roboto;
  font-style: normal;
  color: #ffffff;

  text-align: justify;

  @media screen and (max-width: 1200px) {
    margin: 0 -5vw;
    padding: 2vh 5vw;
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: 500;
    font-size: 2.5vw;
    line-height: 194%;
    margin: 0.5vh 0;
    @media screen and (max-width: 1600px) {
      font-size: 3vw;
    }

    @media screen and (max-width: 500px) {
      font-size: 3.5vw;
    }
  }

  p {
    font-weight: normal;
    font-size: 1vw;
    line-height: 167%;

    @media screen and (max-width: 1600px) {
      font-size: 1.5vw;
    }

    @media screen and (max-width: 800px) {
      font-size: 2vw;
    }

    @media screen and (max-width: 500px) {
      font-size: 2.5vw;
      font-weight: 300;
    }
  }
`;

export const Content01 = styled.div`
  width: 40vw;
  margin: 10vh 0 15vh 5vw;

  @media screen and (max-width: 1700px) {
    margin-bottom: 10vh;
  }

  @media screen and (max-width: 1600px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1200px) {
    width: 50vw;
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    width: 70vw;
    /* margin-bottom: 5vh; */
  }
`;

export const Content02 = styled.div`
  width: 30vw;
  margin: 15vh 5vw 10vh 15vw;

  @media screen and (max-width: 1600px) {
    margin-top: 10vh;
  }

  @media screen and (max-width: 1200px) {
    margin: 10vh 0 5vh 20vw;
  }

  @media screen and (max-width: 800px) {
    margin: 2vh 0 0 0;
    width: 55vw;
  }

  @media screen and (max-width: 500px) {
    width: 70vw;
    /* margin-bottom: 5vh; */
  }
`;

export const Image = styled.img`
  padding: 5vh 0;
  width: 100%;
`;

export const Img1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Img01 = styled.div`
  width: 30vw;
  position: absolute;
  top: -5vh;
  left: 10vw;
  z-index: 2;
  img {
    width: 100%;
    margin: 0;
  }

  @media screen and (max-width: 800px) {
    top: -2vh;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Img02 = styled.div`
  width: 15vw;
  position: absolute;
  top: 15vh;
  left: 5vw;
  z-index: 1;
  img {
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    top: 5vh;
  }
`;

export const Img03 = styled.div`
  width: 30vw;
  position: absolute;
  bottom: -5vh;
  right: 10vw;
  z-index: 2;
  img {
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    bottom: -2vh;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Img04 = styled.div`
  width: 20vw;
  position: absolute;
  bottom: 15vh;
  right: 0;
  z-index: 1;
  img {
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    bottom: 5vh;
  }

  @media screen and (max-width: 500px) {
    bottom: 8vh;
  }
`;
