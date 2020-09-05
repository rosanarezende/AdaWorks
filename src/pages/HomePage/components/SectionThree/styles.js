import styled from 'styled-components';

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
