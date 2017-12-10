import React from "react";

import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

/**
 * Login component
 * @author Joumen Harzli
 */
export class LoginComponent extends React.Component {
  /**
   * errors  : fields errors
   * touched : form touched
   */
  state = { errors: {}, touched: true };

  /**
   * When the form is submitted
   */
  onSubmit = event => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
  };

  /**
   * Hanlde fields changes
   */
  onChange = event => {
    const target = event.target;
    if (target.value.length === 0) {
      this.addError(target.name);
    } else {
      this.clearError(target.name);
    }
    this.markAsTouched();
  };

  /**
   * Add error to the field
   * @param fieldName : name of the field 
   */
  addError = fieldName => {
    this.mutateErrorState(fieldName, "required");
  };

  /**
   * Clear field error
   * @param fieldName : name of the field 
   */
  clearError = fieldName => {
    this.mutateErrorState(fieldName, "");
  };

  /**
   * Add or clear the error for the field
   * @param fieldName : name of the field
   * @pram value      : value of the error
   */
  mutateErrorState(fieldName, value) {
    const errors = { errors: {} };
    errors[fieldName] = value;
    this.setState(Object.assign(this.state, { errors: errors }));
  }

  /**
   * Mark the form as touched
   */
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
