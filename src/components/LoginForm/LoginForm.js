import React from "react";
import Logo from "./polarchef.png";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-service";

class LoginForm extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  state = { error: null };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/RegistrationForm";
    history.push(destination);
  };

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;
    AuthApiService.postLogin({
      user_name: user_name.name,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.userId);
        this.handleLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
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
            <h1 className="login-link">login</h1>
          </Link>
          <Link to="/">homepage </Link>
          <Link to="Intro">Intro</Link>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <div>
            <form>
              <div className="login-form">
                <div className="login-inputs">
                  <label>Username</label>
                  <input required name="user_name" type="text"></input>
                  <label>Password</label>
                  <input required name="password" type="text"></input>
                </div>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
