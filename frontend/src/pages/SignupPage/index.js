import React from 'react'
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../routes/constants";

import Appbar from "../../containers/Appbar";
import Bottonbar from "../../containers/Bottonbar";

import { PageWrapper } from "../../components/PageWrapper";

import cadastroEmpresa from "../../assets/images/cadastro-empresa.svg";
import cadastroMulher from "../../assets/images/cadastro-mulher.svg";

import { Typography } from "@material-ui/core";
import * as S from "./styles";

function SignupPage() {
  const dispatch = useDispatch();

  return (
    <>
      <PageWrapper>
        <Appbar page="signup" />
        <S.SignupWrapper>
          <S.Title color="primary" align="center">
            Desejo cadastrar meu perfil como:
          </S.Title>

          <S.LinksWrapper>
            <S.LinkWrapper onClick={() => dispatch(push(routes.signupWoman))}>
              <img src={cadastroMulher} alt="Cadastrar como mulher"/>
              <S.Text color="textSecondary">Mulher</S.Text>
            </S.LinkWrapper>

            <S.LinkWrapper onClick={() => dispatch(push(routes.signupCompany))}>
              <img src={cadastroEmpresa} alt="Cadastrar como empresa"/>
              <S.Text color="textSecondary">Empresa</S.Text>
            </S.LinkWrapper>
          </S.LinksWrapper>

          <Typography color="primary" gutterBottom>
            Já tem uma conta? <S.Link color="primary" onClick={() => dispatch(push(routes.login))}>Entre!</S.Link>
          </Typography>
        </S.SignupWrapper>
      </PageWrapper>
      <Bottonbar />
    </>
  );
}

export default SignupPage
