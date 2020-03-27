import React from "react";
import Logo from "../../images/polarchef.png";
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
  state = { loading: false, error: null };

  handleLoginSuccess = () => {
    this.props.history.push("/intro");
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        //TokenService.saveUserId(res.userId);
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
          <Link style={{ textDecoration: "none" }} to="/register">
            <h1 className="register-link">Register</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            <h1 className="login-link">login</h1>
          </Link>
        </div>
        <div className="logo-container">
          <img className="login-logo" src={Logo} alt="logo"></img>
          <div>
            <div className="demo">Demo Credentials: Testuser / Testuser1!</div>
            <form onSubmit={this.handleSubmitJwtAuth}>
              <div className="login-form">
                <div className="login-inputs">
                  <p className="error">{this.state.error}</p>
                  <label className="label-text">Username:</label>
                  <input
                    className="form-box"
                    required
                    name="user_name"
                    type="text"
                  ></input>
                  <label className="label-text">Password:</label>
                  <input
                    className="form-box"
                    required
                    name="password"
                    type="password"
                  ></input>
                  <button className="login-button" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
