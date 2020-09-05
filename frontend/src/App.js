import React from 'react';
import { Provider } from 'react-redux'
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import { history, store } from "./store"
import theme from './styles/theme';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes history={history} />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
