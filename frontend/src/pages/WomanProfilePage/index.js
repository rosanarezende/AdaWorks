import React from "react";

import { useProfile } from "../../hooks";

import AppbarWithDrawer from "../../containers/AppbarWithDrawer";

import * as S from "./styles";

function WomanProfilePage() {
  const profile = useProfile();
  // alguns campos estão com dados mocados e serão alterados posteriormente no backend

  return (
    <>
      <AppbarWithDrawer page="woman-profile">
        <S.Header>
          <S.AvatarStyled alt={profile?.name} src={profile?.image} />
        </S.Header>

        <S.ProfileWrapper>
          <S.Title>{profile?.name?.toUpperCase()}</S.Title>
          <S.Text>
            Head de Tecnologia na Green Mobility <br />
            São Paulo
          </S.Text>

          <S.Title>Sobre mim</S.Title>
          <S.Text>
            {profile?.description}
          </S.Text>

          <S.Title>Experiências</S.Title>
          {profile?.experiences?.map((experience, index) => (
            <S.ExperienceWrapper key={index}>
              <div>
                <S.ExperienceLogo
                  alt={experience?.image}
                  src={experience?.factory_name}
                />
              </div>
              <S.Text>
                {experience?.title} <br />
                Nome da empresa: {experience?.factory_name} <br />
                Período do emprego: agosto de 2020 – o momento <br />
                Duração: 2 meses <br />
                Localidade: {experience?.localization} <br />
              </S.Text>
            </S.ExperienceWrapper>
          ))}
        </S.ProfileWrapper>
      </AppbarWithDrawer>
    </>
  );
}

export default WomanProfilePage;
