import React from "react";
import Thymer from "./Thymer";
import GitHubUser from "./GitHubUser";
import logo from "./timer.svg";

function App() {
  return (
    <div className="App">
      <GitHubUser username="cassidoo" />
      <Thymer />
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default App;
