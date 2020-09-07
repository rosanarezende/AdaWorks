import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../routes/constants";

import Appbar from "../../containers/Appbar";
import Bottonbar from "../../containers/Bottonbar";

import { PageWrapper } from "../../components/PageWrapper";

import florest from "../../assets/images/florest.png";

import { InputAdornment, Typography } from "@material-ui/core";
import * as S from "./styles";

function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    input: "marinaduarte@email.com",
    password: "123456"
  });
  const [hidenPassword, setHidenPassword] = useState(false);
  const dispatch = useDispatch();

  function goToSignUp() {
    dispatch(push(routes.signup));
  }

  function getUserInfo(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  function sendUserInfo(e) {
    e.preventDefault();
    // console.log(userInfo)
    
    if(userInfo.input === "email@vtex.com"){
      dispatch(push("/empresa/vtex"))
    } else {
      dispatch(push("/perfil/marinaduarte"))
    }

    // dispatch(login(userInfo));
  }

  return (
    <>
      <PageWrapper>
        <Appbar page="login" />
        <S.LoginWrapper>
          <S.Form onSubmit={sendUserInfo}>
            <S.InputWrapper
              name="input"
              variant="outlined"
              label="Email"
              placeholder="exemplo@dominio.com"
              type="text"
              value={userInfo.input || ""}
              onChange={getUserInfo}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />

            <S.InputWrapper
              name="password"
              variant="outlined"
              label="Senha"
              placeholder="senha"
              type={hidenPassword ? "text" : "password"}
              value={userInfo.password || ""}
              onChange={getUserInfo}
              required
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      onClick={() => setHidenPassword(!hidenPassword)}
                      src={
                        hidenPassword
                          ? "https://user-images.githubusercontent.com/45580434/84558424-2842d180-ad09-11ea-8377-cc34a14d02df.png"
                          : "https://user-images.githubusercontent.com/45580434/84558461-60e2ab00-ad09-11ea-9c26-aec40d92e425.png"
                      }
                      alt="password"
                    />
                  </InputAdornment>
                ),
                inputProps: {
                  pattern: ".{6,}",
                  title: "A senha deve ter no mínimo 6 caracteres",
                },
              }}
            />

            <S.ButtonWrapper
              type="onSubmit"
              variant="contained"
              color="primary"
            >
              Entrar
            </S.ButtonWrapper>

            <Typography color="primary" gutterBottom>
              Não tem conta? <S.Link color="primary" onClick={goToSignUp}>Cadastre-se!</S.Link>
            </Typography>

          </S.Form>
          <S.Image src={florest} alt="Mulher na floresta" />
        </S.LoginWrapper>

      </PageWrapper>
      <Bottonbar />
    </>
  );
}

export default LoginPage;
