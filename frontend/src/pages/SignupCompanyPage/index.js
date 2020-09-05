import React from 'react'

import Appbar from "../../containers/Appbar";
import Bottonbar from "../../containers/Bottonbar";

import { PageWrapper } from "../../components/PageWrapper";

function SignupCompanyPage() {
  return (
    <>
      <PageWrapper>
      <Appbar page="signup"/>
        SignupCompanyPage
      </PageWrapper>
      <Bottonbar/>
    </>
  )
}

export default SignupCompanyPage
