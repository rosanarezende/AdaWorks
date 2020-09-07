import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import { routes } from "./constants";

import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import SignupCompanyPage from "../pages/SignupCompanyPage";
import SignupWomanPage from "../pages/SignupWomanPage";
import WomanProfilePage from "../pages/WomanProfilePage";
import SearchPage from "../pages/SearchPage";
import CompanySearchPage from "../pages/CompanySearchPage";
import CompanyProfilePage from "../pages/CompanyProfilePage";

function Routes(props) {
	const { history } = props

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage} />
        <Route exact path={routes.signupCompany} component={SignupCompanyPage} />
        <Route exact path={routes.signupWoman} component={SignupWomanPage} />
        <Route exact path={routes.womanProfile} component={WomanProfilePage} />
        <Route exact path={routes.searchCompany} component={SearchPage} />
        <Route exact path={routes.findCompany} component={CompanySearchPage} />
        <Route exact path={routes.companyProfile} component={CompanyProfilePage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes;
