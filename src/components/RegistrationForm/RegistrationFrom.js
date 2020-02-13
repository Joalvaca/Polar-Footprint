import React from "react";
import Logo from "./polarchef.png";
import { Link } from "react-router-dom";
import "./RegistrationForm.css";
import AuthApiService from "../../services/auth-service";

class RegistrationForm extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  state = { error: null };

  handleRegistrationSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/login";
    history.push(destination);
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { first_name, last_name, user_name, password } = ev.target;

    this.setState({
      error: null
    });

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        first_name.value = "";
        last_name.value = "";
        user_name.value = "";
        password.value = "";
        this.handleRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: null });
      });
  };
  render() {
    return (
      <div>
        <div className="login-header">
          <Link style={{ textDecoration: "none" }} to="RegistrationForm">
            <h1 className="register-link">Register</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="LoginForm">
            <h1 className="login-link">Login</h1>
          </Link>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <div>
            <form onSubmit={this.handleRegistrationSuccess}>
              <div className="login-form">
                <div className="login-inputs">
                  <label>First Name</label>
                  <input required name="user_name" type="text"></input>
                  <label>last Name</label>
                  <input required name="user_name" type="text"></input>
                  <label>Username</label>
                  <input required name="user_name" type="text"></input>
                  <label>Password</label>
                  <input required name="password" type="password"></input>
                </div>
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
