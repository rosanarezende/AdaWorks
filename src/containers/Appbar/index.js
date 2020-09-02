import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../routes/constants";
import { useUser } from "../../hooks";

import * as S from "./styles";
import { AppBar, IconButton } from "@material-ui/core";
import { AccountCircle, MoreVert } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';

import MenuItensCompany from "../MenuItensCompany";
import MenuItensUser from "../MenuItensUser";
import SearchContainer from "../SearchContainer";
import MenuPC from "../MenuPC";
import MenuMobile from "../MenuMobile";

export const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Appbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const goToHome = push(routes.home);

  const { userRole } = useUser();

  let search = undefined;
  let buttons = undefined;
  switch (userRole) {
    case "COMPANY":
      buttons = <MenuItensCompany />;
      break;

    case "USER":
      buttons = <MenuItensUser />;
      search = <SearchContainer />;
      break;

    default:
      search = <SearchContainer />;
      break;
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <MenuPC
      menuId={menuId}
      anchorEl={anchorEl}
      isMenuOpen={isMenuOpen}
      handleMenuClose={handleMenuClose}
    />
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <MenuMobile
      buttons={buttons}
      mobileMenuId={mobileMenuId}
      mobileMoreAnchorEl={mobileMoreAnchorEl}
      isMobileMenuOpen={isMobileMenuOpen}
      handleProfileMenuOpen={handleProfileMenuOpen}
      handleMobileMenuClose={handleMobileMenuClose}
    />
  );

  return (
    <div>
      <AppBar
        position="static"
        style={{ height: "8vh", justifyContent: "center" }}
      >
        <S.ToolBarStyled variant="dense">
          <S.Logo
            src="https://user-images.githubusercontent.com/45580434/84555007-12291700-acf1-11ea-9b01-91d7f94f0755.png"
            alt="logo"
            onClick={() => dispatch(goToHome)}
          />

          {search}

          <S.DivGrow />

          <div className={classes.sectionDesktop}>
            {buttons}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </div>
        </S.ToolBarStyled>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </div>
  );
}

export default Appbar;
