import React, { useState, useEffect } from "react";
import TextBox from "./components/text_box/TextBox";

const App = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [gameIsActive, setGameIsActive] = useState(false);

  useEffect(() => {
    if (gameIsActive && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    }
  }, [gameIsActive, timeRemaining]);

  const handleTyping = (event) => {
    setText(event.target.value);
  };

  const toggleGameIsActive = () => {
    gameIsActive ? setGameIsActive(false) : setGameIsActive(true);
  };

  return (
    <div>
      <h1 className="wow">How Fast Can You Type?</h1>
      <h4>Time Remaining: {timeRemaining} seconds</h4>
      <TextBox handleChange={handleTyping} text={text} />
      <button onClick={toggleGameIsActive}>Start Game</button>
      <h1>Word Count: X words</h1>
    </div>
  );
};

export default App;
