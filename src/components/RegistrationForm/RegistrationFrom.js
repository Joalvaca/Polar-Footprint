import React from "react";
import Logo from "../../images/polarchef.png";
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
    this.props.history.push("/login");
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
            <h1 className="login-link">Login</h1>
          </Link>
        </div>
        <div className="register-container">
          <img className="register-logo" src={Logo} alt="logo" />
          <div>
            <div className="register-requirements">
              <strong>
                Password requirements:
                <br />
                Must contain an uppercase, lowercase, number and special
                character
                <br />
                Must be between 8 and 72 characters
                <br />
                Must not begin or end with a space
                <br />
              </strong>
            </div>
            <form onSubmit={this.handleSubmit}>
              {this.state.error ? (
                <p className="error">{this.state.error}</p>
              ) : (
                ""
              )}
              <div className="login-form">
                <div className="login-inputs">
                  <label className="register-label">First Name:</label>
                  <input
                    className="register-box"
                    required
                    name="first_name"
                    type="text"
                  ></input>
                  <label className="register-label">Last Name:</label>
                  <input
                    className="register-box"
                    required
                    name="last_name"
                    type="text"
                  ></input>
                  <label className="register-label">Username:</label>
                  <input
                    className="register-box"
                    required
                    name="user_name"
                    type="text"
                  ></input>
                  <label className="register-label">Password:</label>
                  <input
                    className="register-box"
                    required
                    name="password"
                    type="password"
                  ></input>
                  <button className="register-button" type="submit">
                    Register
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

export default RegistrationForm;
