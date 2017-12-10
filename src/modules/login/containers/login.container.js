/**
 * Login container
 */

import React from "react";
import { LoginComponent } from "../components/login.component";

export class LoginContainer extends React.Component {
  cssProps = `
  
    
  `;
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <LoginComponent />
      </div>
    );
  }
}
