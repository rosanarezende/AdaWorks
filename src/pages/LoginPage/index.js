import React from "react";
import Appbar from "../../containers/Appbar";
import { PageWrapper } from "../../components/PageWrapper";

function LoginPage() {
  return (
    <PageWrapper>
      <Appbar page="login" />
      <div>LoginPage</div>
    </PageWrapper>
  );
}

export default LoginPage;
