import React from "react";

import AppbarWithDrawer from "../../containers/AppbarWithDrawer";

import experience1 from "../../assets/images/experience1.png";
import experience2 from "../../assets/images/experience2.png";

import * as S from "./styles";

function WomanProfilePage() {
  const user = {
    name: "Marina Duarte",
    nickname: "marinaduarte",
    image:
      "https://user-images.githubusercontent.com/45580434/92332700-177ad100-f056-11ea-9946-3230e745351b.png",
  };

  return (
    <>
      <AppbarWithDrawer page="woman-profile">
        <S.Header>
          <S.AvatarStyled alt={user.name} src={user.image} />
        </S.Header>

        <S.ProfileWrapper>
          <S.Title>Marina Duarte</S.Title>
          <S.Text>
            Head de Tecnologia na Green Mobility <br />
            São Paulo
          </S.Text>

          <S.Title>Sobre mim</S.Title>
          <S.Text>
            Executiva especialista em Tecnologia e Inovação com foco em
            Transformação Digital orientado ao negócio. Sólida experiência em
            liderança, gestão de pessoas, reestruturação e construção de times
            de alta performance para as mais diversas áreas de negócio.
          </S.Text>

          <S.Title>Experiências</S.Title>
          <S.ExperienceWrapper>
            <div>

            <img src={experience1} alt="experiência" />
            </div>
            <S.Text>
              Diretora de Tecnologia, Inovação, Relacionamento com Cliente e
              Mercado <br />
              Nome da empresa: Green Mobility <br />
              Período do emprego: agosto de 2020 – o momento <br />
              Duração: 2 meses <br />
              Localidade: São Paulo, SP, Brasil <br />
            </S.Text>
          </S.ExperienceWrapper>
          <S.ExperienceWrapper>
            <div>

            <img src={experience2} alt="experiência" />
            </div>
            <S.Text>
              Fundadora e Diretora de Tecnologia <br />
              Nome da empresa: Eco Tech <br />
              Período do emprego: Janeiro de 2000 – Janeiro de 2019 <br />
              Duração: 19 anos <br />
              Localidade: São Paulo, SP, Brasil <br />
            </S.Text>
          </S.ExperienceWrapper>
        </S.ProfileWrapper>
      </AppbarWithDrawer>
    </>
  );
}

export default WomanProfilePage;
