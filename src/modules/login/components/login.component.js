/**
 * Login component
 * @author Joumen Harzli
 */
import React from "react";

import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

export class LoginComponent extends React.Component {
  state = { errors: {}, touched: true };

  onSubmit = event => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
  };

  onChange = event => {
    const target = event.target;
    if (target.value.length === 0) {
      this.addError(target.name);
    } else {
      this.clearError(target.name);
    }
    this.markAsTouched();
  };

  addError = fieldName => {
    this.insertError(fieldName, "required");
  };

  clearError = fieldName => {
    this.insertError(fieldName, "");
  };

  insertError(fieldName, value) {
    const errors = { errors: {} };
    errors[fieldName] = value;
    this.setState(Object.assign(this.state, { errors: errors }));
  }

  markAsTouched() {
    this.setState(Object.assign(this.state, { touched: true }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} noValidate>
        <Card>
          <CardTitle title="Sign In" />

          <CardText>
            <TextField
              floatingLabelText="Username"
              name="username"
              errorText={
                this.state.errors.username ? "This field is required" : null
              }
              onChange={this.onChange}
            />
            <TextField
              type="password"
              floatingLabelText="Password"
              name="password"
              errorText={
                this.state.errors.password ? "This field is required" : null
              }
              onChange={this.onChange}
            />
          </CardText>

          <CardActions Style="text-align: right">
            <FlatButton
              label="Login"
              primary={true}
              type="submit"
              disabled={
                this.state.errors.username ||
                this.state.errors.password ||
                this.state.untouched ? (
                  true
                ) : (
                  false
                )
              }
            />
          </CardActions>
        </Card>
      </form>
    );
  }
}
