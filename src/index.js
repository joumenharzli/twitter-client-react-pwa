import React from "react";
import { render } from "react-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { LoginContainer } from "./modules/login/containers/login.container";

render(
  <MuiThemeProvider>
    <LoginContainer />
  </MuiThemeProvider>,
  document.getElementById("app")
);
