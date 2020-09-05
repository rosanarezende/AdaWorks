import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

import { routes } from '../../routes/constants';

import face from "../../assets/icons/face.png"
import insta from "../../assets/icons/insta.png"
import linkedin from "../../assets/icons/linkedin.png"
import twitter from "../../assets/icons/twitter.png"
import youtube from "../../assets/icons/youtube.png"

import { Button } from '@material-ui/core';

import * as S from './styles';

function Bottonbar() {
  const dispatch = useDispatch()

  return (
    <S.BottonbarWrapper>
      <S.Copyright>©2020 Adaworks</S.Copyright>
      <S.DividerStyled variant="fullWidth"/>
      <S.LinksWrapper>
        <div>
          <Button color="inherit" onClick={() => dispatch(push(routes.home))}>
            Home
          </Button>
          <Button color="inherit" onClick={() => dispatch(push(routes.home))}>
            Sobre nós
          </Button>
          <Button color="inherit" onClick={() => dispatch(push(routes.home))}>
            Contato
          </Button>
        </div>
        <div>
          <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
            <S.SocialMedia src={face} alt="Facebook"/>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <S.SocialMedia src={linkedin} alt="Linkedin"/>
          </a>
          <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
            <S.SocialMedia src={twitter} alt="Twitter"/>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <S.SocialMedia src={youtube} alt="Youtube"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <S.SocialMedia src={insta} alt="Instagram"/>
          </a>
        </div>
      </S.LinksWrapper>
    </S.BottonbarWrapper>
  )
}

export default Bottonbar
