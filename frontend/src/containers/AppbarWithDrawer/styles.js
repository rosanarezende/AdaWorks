import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from "@material-ui/core";

const drawerWidth = 300;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const AppBarStyled = styled(AppBar)`
  height: 6vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    height: 8vh;
    padding-top: 1vh;
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  padding: 0;
`;

export const DivGrow = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const Logo = styled.img`
  height: 4vh;
  width: auto;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    height: 6vh;
  }
`;
