import React from "react";
import TextBox from "./components/text_box/TextBox";

const App = () => (
  <div>
    <h1 className="wow">How Fast Can You Type?</h1>
    <h4>Time Remaining: 60 seconds</h4>
    <TextBox />
    <button>Start Game</button>
    <h1>Word Count: X words</h1>
  </div>
);

export default App;
