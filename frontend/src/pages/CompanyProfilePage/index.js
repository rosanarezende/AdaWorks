import React from "react";

import AppbarWithDrawer from "../../containers/AppbarWithDrawer";

import experience1 from "../../assets/images/experience1.png";
import stars from "../../assets/icons/stars.png";

import { Typography } from "@material-ui/core";
import * as S from "./styles";

function CompanyProfilePage() {
  const companyNickname = window.location.pathname.substr(9, 29);

  const companiesList = [
    {
      name: "Green mobility",
      nickname: "green-mobility",
      description: "Mobilidade sustentável",
      evaluation: 4,
      logo: experience1,
      salary: [
        "Ofeceremos salários competitivos, alinhados com os praticados no mercado.",
        "Valorizamos e respeitamos a diversidade e igualdade de direitos, oferecendo salários igualitários para homens e mulheres na mesma posição."
      ],
      benefits: [
        "Oferecemos convênio com plano de saúde a todos os funcionários dentro da política de coparticipação."
      ],
      careerProgression: [
        "A cada semestre é realizada uma avaliação de todos os funcionários da empresa, permitindo uma visão geral da performance independentemente do cargo.",
        "Proporcionamos oportunidades de desenvolvimento profissioal a partir da avaliação realizada e do resultado de desempenho e contribuição da colaboradora para a empresa.",
        "Estimulamos o aprendizado a partir de cursos, palestras e eventos que visam o compartilhamento de informações e aprendizado geral."
      ],
      maternity: [
        "Tratamos mulheres grávidas da mesma forma que as demais, dando oportunidades de crescimento na empresa e sem congelamento de salários e cargos.",
        "Oferemos auxílio creche e opção de recreamento para crianças cujas mães eventualmente precisem levar ao trabalho."
      ],
    },
  ];

  const company = companiesList.filter(
    (item) => item?.nickname === companyNickname
  )[0];

  return (
    <AppbarWithDrawer>
      {company === undefined ? (
        <Typography variant="body1" align="center">
          No momento não temos informações disponíveis sobre a empresa
          selecionada.
        </Typography>
      ) : (
        <S.PaperStyled>
          <S.Header>
            <div>
              <S.Logo src={company.logo} alt="logo" />
              <div>
                <S.CompanyName>Empresa: {company.name}</S.CompanyName>
                <S.CompanyDescription>
                  {company.description}
                </S.CompanyDescription>
              </div>
            </div>
            <div>
              <S.Evaluation>Avaliação</S.Evaluation>
              <S.Stars src={stars} alt="avaliação" />
            </div>
          </S.Header>

          {company.salary?.length !== 0 && (
            <S.CardStyled>
              <S.Title>SALÁRIO</S.Title>
              {company.salary.map((item, index) => (
                <S.Text key={index}>- {item}</S.Text>
              ))}
            </S.CardStyled>
          )}

          {company.benefits?.length !== 0 && (
            <S.CardStyled>
              <S.Title>BENEFÍCIOS</S.Title>
              {company.benefits.map((item, index) => (
                <S.Text key={index}>- {item}</S.Text>
              ))}
            </S.CardStyled>
          )}

          {company.careerProgression?.length !== 0 && (
            <S.CardStyled>
              <S.Title>PROGRESSÃO DE CARREIRA</S.Title>
              {company.careerProgression.map((item, index) => (
                <S.Text key={index}>- {item}</S.Text>
              ))}
            </S.CardStyled>
          )}

          {company.maternity?.length !== 0 && (
            <S.CardStyled>
              <S.Title>MATERNIDADE</S.Title>
              {company.maternity.map((item, index) => (
                <S.Text key={index}>- {item}</S.Text>
              ))}
            </S.CardStyled>
          )}
        </S.PaperStyled>
      )}
    </AppbarWithDrawer>
  );
}

export default CompanyProfilePage;
