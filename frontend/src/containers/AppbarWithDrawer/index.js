import React, { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useTheme } from "@material-ui/core/styles";

import { routes } from "../../routes/constants";

import logoImg from "../../assets/images/logo2.png";
// import marina from "../../assets/images/marina.png";

import DrawerContent from "./DrawerContent";

import { CssBaseline, Drawer, Toolbar, IconButton } from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";
import * as S from "./styles";

function AppbarWithDrawer(props) {
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = S.useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const user = {
    name: "Marina Duarte",
    nickname: "marinaduarte",
    image: "https://user-images.githubusercontent.com/45580434/92332700-177ad100-f056-11ea-9946-3230e745351b.png"
  }

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <S.AppBarStyled
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openDrawer,
          })}
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
            <S.Logo src={logoImg} alt="logo" onClick={() => dispatch(push(routes.home))} />
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
