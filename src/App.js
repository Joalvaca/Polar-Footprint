import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Homepage from "./components/Homepage/Homepage";
import Footprint from "./components/Footprint/Footprint";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationFrom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

library.add(fab);

function App() {
  return (
    <div>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path={["/footprints"]} component={Header} />
      <Route path="/login" component={LoginForm} />

      <Route path="/register" component={RegistrationForm} />

      <PrivateRoute path="/footprints" component={Footprint} />
    </div>
  );
}

export default App;
