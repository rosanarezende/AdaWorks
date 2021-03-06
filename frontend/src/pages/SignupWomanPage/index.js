import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setOpen, setMessage } from "../../actions/messages";
import { signupWoman } from "../../actions/woman";

import Appbar from "../../containers/Appbar";
import Bottonbar from "../../containers/Bottonbar";
import Message from "../../components/Message";
import InputsWrapper from "../../components/InputsWrapper";

import { PageWrapper } from "../../components/PageWrapper";

import {
  InputAdornment,
  FormControl,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import * as S from "./styles";

function SignupWomanPage() {
  const [formInfo, setFormInfo] = useState({});
  const [apply, setApply] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [hidenPassword, setHidenPassword] = useState(false);
  const [hidenConfirm, setHidenConfirm] = useState(false);
  const { open } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const createNewUser = [
    {
      name: "name",
      label: "Nome",
      placeholder: "Fulana de tal",
      type: "text",
      pattern: "[a-zA-Zà-úÀ-ú0-9 ]{3,}",
      title: "O nome deve conter apenas letras ou números, no mínimo de 3",
    },
    {
      name: "cpf",
      label: "CPF",
      placeholder: "000.000.000-00",
      type: "text",
      required: true,
      pattern: "[0-9]{3,}[.]{1,}[0-9]{3,}[.]{1,}[0-9]{3,}[-]{1,}[0-9]{2,}",
      title: "Digite seu CPF com pontos e traço.",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "email@email.com",
      type: "email",
    },
    {
      name: "nickname",
      label: "Nome de usuário",
      placeholder: "fulanadetal",
      type: "text",
      pattern: "[a-zA-Z0-9_]{5,}",
      title:
        "O nickname deve conter no mínimo 5 caracteres (letras, números ou _), sem espaços.",
    },
    {
      name: "password",
      label: "Senha",
      type: hidenPassword ? "text" : "password",
      placeholder: "Mínimo 6 caracteres",
      pattern: ".{6,}",
      title: `Sua senha deve conter no mínimo 6 caracteres`,
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
    },
    {
      name: "confirm",
      label: "Confirmar",
      type: hidenConfirm ? "text" : "password",
      placeholder: "Confirme a senha anterior",
      pattern: ".{6,}",
      title: `Sua senha deve conter no mínimo 6 caracteres`,
      endAdornment: (
        <InputAdornment position="end">
          <img
            onClick={() => setHidenConfirm(!hidenConfirm)}
            src={
              hidenConfirm
                ? "https://user-images.githubusercontent.com/45580434/84558424-2842d180-ad09-11ea-8377-cc34a14d02df.png"
                : "https://user-images.githubusercontent.com/45580434/84558461-60e2ab00-ad09-11ea-9c26-aec40d92e425.png"
            }
            alt="password"
          />
        </InputAdornment>
      ),
    },
  ];

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const getFormInfo = (event) => {
    const { name, value } = event.target;
    if (name === "cpf") {
      setFormInfo({ ...formInfo, cpf: cpfMask(value) });
    } else {
      setFormInfo({ ...formInfo, [name]: value });
    }
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    if (!privacy) {
      dispatch(
        setMessage(
          "É necessário confirmar os termos de uso e a política de privacidade!",
          "red"
        )
      );
      dispatch(setOpen(true));
      return;
    }

    const { name, cpf, email, nickname, password, confirm } = formInfo;
    const cpfFormatted = Number(
      cpf.replace(".", "").replace(".", "").replace("-", "")
    );
    const data = {
      name,
      cpf: cpfFormatted,
      email,
      nickname,
      password,
      apply,
      agreeToTerms: privacy,
    };
    if (password !== confirm) {
      dispatch(setMessage("Senhas não conferem!", "red"));
      dispatch(setOpen(true));
    } else {
      dispatch(signupWoman(data));
      setFormInfo({});
    }
  };

  return (
    <>
      <PageWrapper>
        <Appbar page="signup" />
        <S.Form onSubmit={handleSubmission}>
          <InputsWrapper
            list={createNewUser}
            formInfo={formInfo}
            getFormInfo={getFormInfo}
          />

          <S.OptionsWrapper>
            <FormControl component="fieldset">
              <FormGroup>
                <S.Option
                  control={
                    <Checkbox
                      color="primary"
                      checked={apply}
                      onChange={(e) => setApply(e.target.checked)}
                      name="apply"
                    />
                  }
                  label="Desejo me candidatar para vagas."
                />
                <S.Option
                  control={
                    <Checkbox
                      color="primary"
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      name="privacy"
                    />
                  }
                  label="Concordo com os Termos de Uso e a Política de Privacidade e confirmo que me identifico como mulher."
                />
              </FormGroup>
            </FormControl>
          </S.OptionsWrapper>

          <S.ButtonWrapper type="submit" variant="contained" color="primary">
            Cadastrar
          </S.ButtonWrapper>
        </S.Form>
      </PageWrapper>
      <Bottonbar />
      {open && <Message />}
    </>
  );
}

export default SignupWomanPage;
