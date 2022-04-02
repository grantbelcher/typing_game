import React, { useState } from "react";
import TextBox from "./components/text_box/TextBox";

const App = () => {
  const [text, setText] = useState("");

  const handleTyping = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1 className="wow">How Fast Can You Type?</h1>
      <h4>Time Remaining: 60 seconds</h4>
      <TextBox handleChange={handleTyping} text={text} />
      <button>Start Game</button>
      <h1>Word Count: X words</h1>
    </div>
  );
};

export default App;
