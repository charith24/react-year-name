import React from "react";
import ReactDOM from "react-dom";

var name = "Charith";
var date = new Date();
var year = date.getFullYear();

ReactDOM.render(
  <div>
    <p> {name} </p>

    <p> {year} </p>
  </div>,
  document.getElementById("root")
);
