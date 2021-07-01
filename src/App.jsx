import React from "react";
import Thymer from "./Thymer";
import logo from "./timer.svg";

function App() {
  return (
    <div className="App">
      <Thymer />
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default App;
