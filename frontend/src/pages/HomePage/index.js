import React from "react";

import { cards } from "./constants";

import mulherForte from "../../assets/images/mulher1.svg";
import diversidade from "../../assets/images/diversidade.png";

import Appbar from "../../containers/Appbar";
import Bottonbar from "../../containers/Bottonbar";

import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

import { PageWrapper } from "../../components/PageWrapper";
import * as S from "./styles";

function HomePage() {
  return (
    <>
      <PageWrapper>
        <Appbar page="home" />

        <S.SectionOne>
          <S.Title>Inclusão, diversidade, empoderamento na tecnologia.</S.Title>
          <S.Logo src={mulherForte} alt="Mulher Forte" />
        </S.SectionOne>
      </PageWrapper>

      <PageWrapper style={{ background: "white" }}>
        <SectionTwo cards={cards} />

        <SectionThree />

        <S.SectionFour>
          <S.Subtitle>
            Inclusão, diversidade e empoderamento na tecnologia.
          </S.Subtitle>
          <S.Image src={diversidade} alt="Mulheres" />
        </S.SectionFour>

      </PageWrapper>
        <Bottonbar />
    </>
  );
}

export default HomePage;
