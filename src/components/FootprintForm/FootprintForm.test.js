import React from "react";
import ReactDOM from "react-dom";
import FootprintForm from "./FootprintForm";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FootprintForm />, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
