import React, { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useTheme } from "@material-ui/core/styles";

import { routes } from "../../routes/constants";
import { useProfile } from '../../hooks'

import logoImg from "../../assets/images/logo2.png";

import DrawerContent from "./DrawerContent";

import { CssBaseline, Drawer, Toolbar, IconButton } from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";
import * as S from "./styles";

function AppbarWithDrawer(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = S.useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const profile = useProfile()

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const user =
    props.page === "company" || props.page === "company-profile"
      ? {
          name: "VTEX",
          nickname: "vtex",
          cnpj: "123",
          plan: "Lovelace",
          image:
            "https://user-images.githubusercontent.com/45580434/92342424-377eb480-f097-11ea-9624-aa9c6beb7af7.png",
        }
      : profile;

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <S.AppBarStyled
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openDrawer,
          })}
          elevation={(props.page === "woman-profile" || props.page === "company-profile") ? 0 : 4}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, openDrawer && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <S.DivGrow />
            <S.Logo
              src={logoImg}
              alt="logo"
              onClick={() => dispatch(push(routes.home))}
            />
            <S.DivGrow />
          </Toolbar>
        </S.AppBarStyled>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>

          <DrawerContent user={user} />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: openDrawer,
          })}
        >
          <div className={classes.drawerHeader} />
          {props.children}
        </main>
      </div>
    </>
  );
}

export default AppbarWithDrawer;
