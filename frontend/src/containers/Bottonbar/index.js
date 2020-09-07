import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../routes/constants";

import { setMessage, setOpen } from "../../actions/messages";

import Message from "../../components/Message";

import face from "../../assets/icons/face.png";
import insta from "../../assets/icons/insta.png";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";

import { Button } from "@material-ui/core";

import * as S from "./styles";

function Bottonbar() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.messages);

  const development = () => {
    dispatch(setMessage("Funcionalidade ainda não finalizada", "red"));
    dispatch(setOpen(true));
  };

  return (
    <>
      <S.BottonbarWrapper>
        <S.Copyright>©2020 Adaworks</S.Copyright>
        <S.DividerStyled variant="fullWidth" />
        <S.LinksWrapper>
          <div>
            <Button color="inherit" onClick={() => dispatch(push(routes.home))}>
              Home
            </Button>
            <Button color="inherit" onClick={development}>
              Sobre nós
            </Button>
            <Button color="inherit" onClick={development}>
              Contato
            </Button>
          </div>
          <div>
            <a
              href="https://www.facebook.com/adaworks1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SocialMedia src={face} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/adaworks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SocialMedia src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://twitter.com/adaworks1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SocialMedia src={twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCOwo0MaPBYQB2Asv5A_Y68A/about?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SocialMedia src={youtube} alt="Youtube" />
            </a>
            <a
              href="https://www.instagram.com/ada.works"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SocialMedia src={insta} alt="Instagram" />
            </a>
          </div>
        </S.LinksWrapper>
      </S.BottonbarWrapper>
      {open && <Message />}
    </>
  );
}

export default Bottonbar;
