import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../routes/constants";

import { setMessage, setOpen } from "../../actions/messages";

import logoImg from "../../assets/images/logo.svg";

import Message from "../../components/Message";

import * as S from "./styles";
import {
  IconButton,
  Button,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

function Appbar({ page }) {
  const dispatch = useDispatch();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { open } = useSelector((state) => state.messages);

  const linksList = [
    { name: "Home", path: routes.home },
    { name: "Mulheres", path: routes.home, notFinalized: true },
    { name: "Empresas", path: routes.home, notFinalized: true },
    { name: "Contato", path: routes.home, notFinalized: true },
  ];

  const development = () => {
    dispatch(setMessage("Funcionalidade ainda não finalizada", "red"));
    dispatch(setOpen(true));
  };

  const links = linksList.map((link, index) => (
    <S.LinkStyled key={index}>
      <Button color="primary" onClick={link.notFinalized === true ? development : () => dispatch(push(link.path))}>
        {link.name}
      </Button>
      <span>|</span>
    </S.LinkStyled>
  ));

  let buttons = [];
  let linksAppears = false;
  switch (page) {
    case "home":
      linksAppears = true;
      buttons = [
        { name: "Login", path: routes.login },
        { name: "Cadastro", path: routes.signup },
      ];
      break;

    case "login":
      linksAppears = true;
      buttons = [{ name: "Cadastro", path: routes.signup }];
      break;

    case "signup":
      linksAppears = true;
      break;

    default:
      break;
  }

  const menuItensList = linksList.concat(buttons);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {menuItensList?.map((route, index) => (
        <MenuItem key={index} onClick={() => dispatch(push(route.path))}>
          <Typography variant="body1">{route.name}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <S.AppBarStyled position="static" color="transparent" elevation={0}>
        <S.ToolbarStyled>
          <S.Logo src={logoImg} alt="logo" onClick={() => dispatch(push(routes.home))} />
          <S.DivGrow />
          <S.SectionDesktop>{linksAppears && links}</S.SectionDesktop>
          {buttons.length > 0 && <S.DivGrow />}
          <S.SectionDesktop>
            {buttons?.map((item, index) => (
              <Button
                key={index}
                color="primary"
                variant="contained"
                onClick={() => dispatch(push(item.path))}
                style={{ marginRight: "10px" }}
              >
                {item.name}
              </Button>
            ))}
          </S.SectionDesktop>
          <S.SectionMobile>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </S.SectionMobile>
        </S.ToolbarStyled>
      </S.AppBarStyled>
      {renderMobileMenu}
      {open && <Message />}
    </>
  );
}

export default Appbar;
