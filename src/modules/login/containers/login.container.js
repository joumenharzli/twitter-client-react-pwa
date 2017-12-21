/**
 * Login container
 */

import React from "react";
import { LoginComponent } from "../components/login.component";
import { LoginService } from "../services/login.service";

export class LoginContainer extends React.Component {

  constructor() {
    super();
    this.loginService = new LoginService();
  }

  handleFormSubmit = (value) => {
    this.loginService.getRequestToken().subscribe((res)=>{
      console.log(res);
    },(err)=>alert(err));
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <LoginComponent onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
