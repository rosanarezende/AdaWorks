import React from "react";

import AppbarWithDrawer from "../../containers/AppbarWithDrawer";

import * as S from "./styles";

function CompanyProfilePage() {
  const user = {
    name: "VTEX",
    nickname: "vtex",
    cnpj: "123",
    plan: "Lovelace",
    image:
      "https://user-images.githubusercontent.com/45580434/92342424-377eb480-f097-11ea-9624-aa9c6beb7af7.png",
    description:
      "A VTEX fornece plataforma de e-commerce baseada em nuvem e soluções Omnichannel. Conhecida por sua tecnologia de vanguarda e por ser uma plataforma de tempo para receita, a VTEX foi reconhecida pelos analistas do Gartner e Forrester como Líder Global de Comércio Digital. A VTEX está classificada no Quadrante Mágico do Gartner para Comércio Digital.",
  };

  return (
    <AppbarWithDrawer page="company-profile">
      <S.Header>
        <S.AvatarStyled alt={user.name} src={user.image} />
      </S.Header>

      <S.ProfileWrapper>
        <S.Title>{user.name}</S.Title>
        <S.Text>
          Plataforma e-commerce <br />
          Rio de Janeiro
        </S.Text>

        <S.Text>{user.description}</S.Text>

        <S.Text>
          Site: https://vtex.com/br-pt/ <br />
          Funcionários: 501 a 1.000 funcionários <br />
          Fundação: 2000 <br />
          Tipo de empresa: privada <br />
        </S.Text>

        <S.Text>Avaliação:</S.Text>

        <S.Text>Linkedin: https://br.linkedin.com/company/vtex</S.Text>

        <S.Text>Políticas da empresa:</S.Text>
      </S.ProfileWrapper>
    </AppbarWithDrawer>
  );
}

export default CompanyProfilePage;
