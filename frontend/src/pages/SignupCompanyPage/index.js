import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setOpen, setMessage } from "../../actions/messages";
import { signupCompany } from "../../actions/company";

import Appbar from "../../containers/Appbar";
import Bottonbar from "../../containers/Bottonbar";
import Message from "../../components/Message";
import InputsWrapper from "../../components/InputsWrapper";
import Pricing from "./components/Princing";

import { PageWrapper } from "../../components/PageWrapper";

import {
  InputAdornment,
  FormControl,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import * as S from "./styles";

function SignupCompanyPage() {
  const [formInfo, setFormInfo] = useState({});
  const [formAppears, setFormAppears] = useState(false);
  const [hire, setHire] = useState(false);
  const [authorization, setAuthorization] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [hidenPassword, setHidenPassword] = useState(false);
  const [hidenConfirm, setHidenConfirm] = useState(false);
  const { open } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const createNewCompany = [
    {
      name: "companyName",
      label: "Nome da empresa",
      placeholder: "Empresa Tal",
      type: "text",
      pattern: "[a-zA-Zà-úÀ-ú0-9 ]{3,}",
      title: "O nome deve conter apenas letras ou números, no mínimo de 3",
    },
    {
      name: "cnpj",
      label: "CNPJ",
      placeholder: "00.000.000/0000-00",
      type: "text",
      required: true,
      pattern:
        "[0-9]{2,}[.]{1,}[0-9]{3,}[.]{1,}[0-9]{3,}[/]{1,}[0-9]{4,}[-]{1,}[0-9]{2,}",
      title: "Digite o CNPJ da empresa com pontos, barra e traço.",
    },
    {
      name: "name",
      label: "Nome completo",
      placeholder: "Fulana de Tal",
      type: "text",
      pattern: "[a-zA-Zà-úÀ-ú0-9 ]{3,}",
      title: "O nome deve conter apenas letras ou números, no mínimo de 3",
    },
    {
      name: "positionInCompany",
      label: "Cargo na empresa",
      placeholder: "cargo ou função",
      type: "text",
      pattern: "[a-zA-Zà-úÀ-ú0-9 ]{3,}",
      title: "O nome deve conter apenas letras ou números, no mínimo de 3",
    },
    {
      name: "email",
      label: "Endereço de e-mail profissional",
      placeholder: "email@empresa.com",
      type: "email",
    },
    {
      name: "nickname",
      label: "Nome de usuário da empresa",
      placeholder: "empresatal",
      type: "text",
      pattern: "[a-zA-Z0-9_]{4,}",
      title:
        "O nickname deve conter no mínimo 4 caracteres (letras, números ou _), sem espaços.",
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

  const cnpjMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const getFormInfo = (event) => {
    const { name, value } = event.target;
    if (name === "cnpj") {
      setFormInfo({ ...formInfo, cnpj: cnpjMask(value) });
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

    if (!authorization) {
      dispatch(
        setMessage(
          "Apenas pessoas autorizadas pela empresa podem criar as respectivas contas",
          "red"
        )
      );
      dispatch(setOpen(true));
      return;
    }

    const {
      companyName,
      cnpj,
      name,
      positionInCompany,
      email,
      nickname,
      password,
      confirm,
    } = formInfo;
    const cnpjFormatted = Number(cnpj.replace(/[^\d]+/g, ""));
    const data = {
      factoryName: companyName,
      cnpj: cnpjFormatted,
      name,
      role: positionInCompany,
      email,
      nickname,
      password,
      agreeToTerms: privacy,
      authorization,
      hire,
    };
    if (password !== confirm) {
      dispatch(setMessage("Senhas não conferem!", "red"));
      dispatch(setOpen(true));
    } else {
      dispatch(signupCompany(data))
      setFormInfo({})
    }
  };

  return (
    <>
      <PageWrapper>
        <Appbar page="signup" />

        <S.Title color="primary" variant="h5" align="center">
          Traga sua empresa para a Adaworks e conheça mulheres incríveis na área
          de T.I.
        </S.Title>

        <Pricing setFormAppears={setFormAppears} formAppears={formAppears} />

        {formAppears && (
          <S.Form onSubmit={handleSubmission}>
            <InputsWrapper
              list={createNewCompany}
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
                        checked={hire}
                        onChange={(e) => setHire(e.target.checked)}
                        name="hire"
                      />
                    }
                    label="Desejo recrutar candidatas para vagas."
                  />
                  <S.Option
                    control={
                      <Checkbox
                        color="primary"
                        checked={authorization}
                        onChange={(e) => setAuthorization(e.target.checked)}
                        name="authorization"
                      />
                    }
                    label="Represento o departamento de RH, recrutamento, marketing ou relações públicas ou sou executiv@ nessa empresa."
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
                    label="Concordo com os Termos de Uso e com a Política de Privacidade."
                  />
                </FormGroup>
              </FormControl>
            </S.OptionsWrapper>

            <S.ButtonWrapper type="submit" variant="contained" color="primary">
              Cadastrar
            </S.ButtonWrapper>
          </S.Form>
        )}
      </PageWrapper>
      <Bottonbar />
      {open && <Message />}
    </>
  );
}

export default SignupCompanyPage;
