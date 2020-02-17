import React from "react";
import ReactDOM from "react-dom";
import RegistrationFrom from "./RegistrationFrom";
import { BrowserRouter } from "react-router-dom";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <RegistrationFrom />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
