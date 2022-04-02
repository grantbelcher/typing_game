import React from "react";
import "./App.css";
import Test from "./components/Test/Test";
import piazza from "./piazza.jpeg";

const App = () => (
  <div>
    <h1 className="wow">Welcome to React!</h1>
    <Test />
    <img src={piazza} alt="" />
  </div>
);

export default App;
