import React from "react";

import { PageWrapper } from "../../components/PageWrapper";

import Appbar from "../../containers/Appbar";

import mulherForte from "../../assets/images/mulher1.svg";
import recrutamento from "../../assets/images/recrutamento.png";
import eventos from "../../assets/images/eventos.png";
import empresa from "../../assets/images/empresa.png";
import diversidade from "../../assets/images/diversidade.png";
import bolinhasHorizontal from "../../assets/images/bolinhas-horizontal.png";
import bolinhasVertical from "../../assets/images/bolinhas-vertical.png";
import mulheresNaTecnologia from "../../assets/images/mulheres-na-tecnologia.png";
import suaOpiniaoImporta from "../../assets/images/sua-opiniao-importa.png";
import top from "../../assets/borders/top2.png";
import bottom from "../../assets/borders/bottom2.png";

import * as S from "./styles";
import Bottonbar from "../../containers/Bottonbar";

function HomePage() {
  const cards = [
    {
      image: recrutamento,
      title: "Recrutamento",
      description:
        "Seja encontrada por empresas dos mais diversos setores e escolha a oportunidade de carreira certa para você!",
    },
    {
      image: eventos,
      title: "Eventos",
      description:
        "Quer ficar por dentro de eventos relacionados aos seus interesses? Inscreva-se!",
    },
    {
      image: empresa,
      title: "Empresa",
      description:
        "É funcionári@? Crie uma conta para sua empresa e disponibilize informações e vagas disponíveis.",
    },
  ];

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
        <S.SectionTwo>
          <S.Subtitle>
            Uma plataforma feita por mulheres e para mulheres. <br />
            Conheça nossos benefícios para <span>mulheres</span> e{" "}
            <span>empresas</span>.
          </S.Subtitle>
          <S.CardsWrapper>
            {cards.map((card, index) => (
              <S.CardContent key={index}>
                <img src={card.image} alt="Foto" />
                <S.Topic>{card.title}</S.Topic>
                {card.description}
              </S.CardContent>
            ))}
          </S.CardsWrapper>
        </S.SectionTwo>

        <S.SectionThree>
          <S.Img01>
            <img src={mulheresNaTecnologia} alt="mulheres na tecnologia" />
          </S.Img01>
          <S.Img02>
            <img src={bolinhasVertical} alt="bolinhas na vertical" />
          </S.Img02>
          <S.Img03>
            <img src={suaOpiniaoImporta} alt="top" />
          </S.Img03>
          <S.Img04>
            <img src={bolinhasHorizontal} alt="top" />
          </S.Img04>

          <img src={top} alt="top" />

          <S.SectionThreeContent>
            <S.Line>
              <div />
              <S.Content01>
                <h3>Mulheres na tecnologia</h3>
                <p>
                  Com aproximadamente 350 mil vagas sendo criadas entre 2020 e
                  2024 na área de TI, as mulheres assumem cada vez mais um papel
                  protagonista. Hoje, somos apenas 17% dos funcionários em
                  cargos de tecnologia. Nos capacitamos e acreditamos que não há
                  mais justificativa para ficarmos à parte da chamada quarta
                  revolução industrial.
                </p>
              </S.Content01>
            </S.Line>

            <S.Line>
              <S.Content02>
                <h3>Sua opinião importa</h3>
                <p>
                  Nossa plataforma é preparada para garantir o máximo de
                  segurança às nossas usuárias, permitindo que compartilhem suas
                  experiências dentro de empresas e as avaliem, de forma anônima
                  ou não.
                </p>
              </S.Content02>
              <div />
            </S.Line>
          </S.SectionThreeContent>

          <img src={bottom} alt="bottom" />
        </S.SectionThree>

        <S.SectionTwo>
          <S.Subtitle>
            Inclusão, diversidade e empoderamento na tecnologia.
          </S.Subtitle>
          <S.Image src={diversidade} alt="Mulheres" />
        </S.SectionTwo>

        <Bottonbar />
      </PageWrapper>
    </>
  );
}

export default HomePage;
