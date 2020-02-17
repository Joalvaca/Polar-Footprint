import React from "react";
import ReactDOM from "react-dom";
import Resell from "./Resell";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Resell />, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
