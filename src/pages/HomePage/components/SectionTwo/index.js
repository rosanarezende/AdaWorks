import React from "react";

// import { cards } from "./constants";

import * as S from "./styles";

function SectionTwo({ cards }) {
  return (
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
  );
}

export default SectionTwo;
