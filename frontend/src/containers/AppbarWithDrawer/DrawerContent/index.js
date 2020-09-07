import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../../routes/constants";

import { setMessage, setOpen } from "../../../actions/messages";

import Message from "../../../components/Message";

import meu_perfil from "../../../assets/icons/user-account.png";
import vagas from "../../../assets/icons/recips.png";
import candidaturas from "../../../assets/icons/notification.png";
import avaliacoes from "../../../assets/icons/star.png";
import buscar_empresas from "../../../assets/icons/search.png";
import eventos from "../../../assets/icons/bookmarked.png";
import mentorias from "../../../assets/icons/mentoria.png";
import box from "../../../assets/icons/box.png";
import talk from "../../../assets/icons/talk.png";
import settings from "../../../assets/icons/settings.png";

import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import * as S from "./styles";

function DrawerContent({ user }) {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.messages);

  const development = () => {
    dispatch(setMessage("Funcionalidade ainda não finalizada", "red"));
    dispatch(setOpen(true));
  };

  const links =
    user.cnpj === undefined
      ? [
          {
            name: "Meu perfil",
            path: `/perfil/${user.nickname}`,
            icon: meu_perfil,
          },
          {
            name: "Vagas",
            path: routes.home,
            icon: vagas,
          },
          {
            name: "Candidaturas",
            path: routes.home,
            icon: candidaturas,
          },
          {
            name: "Avaliações",
            path: routes.home,
            icon: avaliacoes,
          },
          {
            name: "Buscar empresas",
            path: routes.searchCompany,
            icon: buscar_empresas,
          },
          {
            name: "Eventos",
            path: routes.home,
            icon: eventos,
          },
          {
            name: "Mentorias",
            path: routes.home,
            icon: mentorias,
          },
        ]
      : [
          {
            name: "Perfil da empresa",
            path: `/empresa/${user.nickname}`,
            icon: meu_perfil,
          },
          {
            name: "Recrutar",
            path: routes.home,
            icon: vagas,
          },
          {
            name: "Candidatas",
            path: routes.home,
            icon: candidaturas,
          },
          {
            name: "Ver Avaliações",
            path: routes.home,
            icon: avaliacoes,
          },
          {
            name: "Buscar empresas",
            path: routes.home,
            icon: buscar_empresas,
          },
          {
            name: "Eventos",
            path: routes.home,
            icon: eventos,
          },
        ];

  const schedules =
    user.cnpj === undefined
      ? [
          {
            name: "Entrevista XCorp",
            data: "27 de Outrubro de 2020",
          },
          {
            name: "Workshop 3D Animation",
            data: "11 de setembro de 2020",
          },
        ]
      : [
          {
            name: "Entrevista Marina Duarte",
            data: "27 de Outrubro de 2020",
          },
          {
            name: "Workshop ecommerce",
            data: "12 de setembro de 2020",
          },
        ];

  return (
    <>
      <S.DrawerWrapper>
        <S.Header>
          <S.AvatarStyled alt={user.name} src={user.image} />
          <Typography color="primary" variant="h6">
            Olá {user.name}!
          </Typography>
          <Typography color="primary" variant="caption">
            Bem-vinda ao AdaWorks!
          </Typography>
          {user.plan &&
          <Typography color="primary" variant="body2">
            Seu plano: <S.Plan>{user.plan}</S.Plan>
          </Typography>
          }
        </S.Header>

        <S.Links>
          <List>
            {links.map((link, index) => (
              <ListItem
                button
                key={index}
                onClick={
                  link.path === routes.home
                    ? development
                    : () => dispatch(push(link.path))
                }
              >
                <ListItemIcon>
                  <img src={link.icon} alt={link.name} />
                </ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </S.Links>

        <S.Schedule>
          <Typography variant="h6">Agenda</Typography>
          <List>
            {schedules.map((item, index) => {
              return index % 2 === 0 ? (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <S.ScheduleAvatar
                      variant="rounded"
                      alt="agendamento"
                      src={talk}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.data} />
                </ListItem>
              ) : (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <S.ScheduleAvatar2
                      variant="rounded"
                      alt="agendamento"
                      src={box}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.data} />
                </ListItem>
              );
            })}
          </List>
        </S.Schedule>

        <S.Configuration onClick={development}>
          <img src={settings} alt="configurações" />
          <Typography color="inherit">Configurações</Typography>
        </S.Configuration>
      </S.DrawerWrapper>
      {open && <Message />}
    </>
  );
}

export default DrawerContent;
