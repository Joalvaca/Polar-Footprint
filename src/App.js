import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Homepage from "./components/Homepage/Homepage";
import Footprint from "./components/Footprint/Footprint";
import Contact from "./components/Contact/Contact";
import Resell from "./components/Resell/Resell";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/homepage">
          <Homepage />
        </Route>

        <Route exact path="/intro">
          <Intro />
        </Route>

        <Route exact path="/footprint">
          <Footprint />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/resell">
          <Resell />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
