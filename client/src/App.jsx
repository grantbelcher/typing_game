import React, { useState, useEffect } from "react";
import TextBox from "./components/text_box/TextBox";

const App = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
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
      setTimeRemaining(10);
      countWords();
    }
  }, [gameIsActive, timeRemaining]);

  const handleTyping = (event) => {
    setText(event.target.value);
  };

  const toggleGameIsActive = () => {
    gameIsActive ? setGameIsActive(false) : resetGame();
  };

  const countWords = () => {
    const words = text.split(" ");
    setWordCount(words.length);
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
      <button onClick={toggleGameIsActive}>Start Game</button>
      <h1>Word Count: {wordCount} words</h1>
    </div>
  );
};

export default App;
