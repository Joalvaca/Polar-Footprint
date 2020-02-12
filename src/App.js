import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Homepage from "./components/Homepage/Homepage";
import Footprint from "./components/Footprint/Footprint";
import Contact from "./components/Contact/Contact";
import Resell from "./components/Resell/Resell";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationFrom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/loginForm">
          <LoginForm />
        </Route>

        <Route exact path="/RegistrationForm">
          <RegistrationForm />
        </Route>

        <Route exact path="/intro">
          <Header />
          <Intro />
        </Route>

        <Route exact path="/footprint">
          <Header />
          <Footprint />
        </Route>

        <Route exact path="/contact">
          <Header />
          <Contact />
        </Route>

        <Route exact path="/resell">
          <Header />
          <Resell />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
