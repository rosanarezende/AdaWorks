import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import { routes } from "./constants";

import NotFoundPage from "../pages/NotFoundPage";
import AccessPage from "../pages/AccessPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

function Routes(props) {
	const { history } = props

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.acess} component={AccessPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes;
