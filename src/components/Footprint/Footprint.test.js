import React from "react";
import ReactDOM from "react-dom";
import Footprint from "./Footprint";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footprint />, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
