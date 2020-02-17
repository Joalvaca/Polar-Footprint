import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
it("renders without crashing", () => {
  const div = document.createElement("div");
  const props = {
    location: {
      pathname: ""
    }
  };
  ReactDOM.render(
    <BrowserRouter>
      <Header {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
