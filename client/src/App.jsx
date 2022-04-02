import React, { useState, useEffect } from "react";
import TextBox from "./components/text_box/TextBox";

const App = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [gameIsActive, setGameIsActive] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (gameIsActive && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    }
    if (timeRemaining === 0) {
      setGameIsActive(false);
      setTimeRemaining(20);
      calculateWPM();
    }
  }, [gameIsActive, timeRemaining]);

  const handleTyping = (event) => {
    setText(event.target.value);
  };

  const toggleGameIsActive = () => {
    gameIsActive ? setGameIsActive(false) : resetGame();
  };

  const calculateWPM = () => {
    let words = text.split(" ");
    let wpm = words.length * 3;
    setWordCount(wpm);
  };

  const resetGame = () => {
    setGameIsActive(true);
    setText("");
  };

  return (
    <div>
      <h1 className="wow">How Fast Can You Type?</h1>
      <h4>Time Remaining: {timeRemaining} seconds</h4>
      <TextBox
        handleChange={handleTyping}
        text={text}
        gameIsActive={gameIsActive}
      />
      <button onClick={toggleGameIsActive} disabled={gameIsActive}>
        Start Game
      </button>
      <h1>You Type At: {wordCount} words per minute</h1>
    </div>
  );
};

export default App;
