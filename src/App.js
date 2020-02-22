import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Homepage from "./components/Homepage/Homepage";
import Footprint from "./components/Footprint/Footprint";
import Contact from "./components/Contact/Contact";
import Resell from "./components/Resell/Resell";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationFrom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div>
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route
        path={["/intro", "/footprints", "/contact", "/resell"]}
        component={Header}
      />

      <Route path="/login" component={LoginForm} />

      <Route path="/register" component={RegistrationForm} />

      <Route exact path="/intro" component={Intro} />
      <Route path="/intro/:intro_id" component={Intro} />

      <Route path="/footprints" component={Footprint} />

      <Route path="/contact" component={Contact} />
      <Route path="/resell" component={Resell} />
    </div>
  );
}

export default App;
