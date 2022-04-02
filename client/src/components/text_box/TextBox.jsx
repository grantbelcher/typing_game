import React, { useRef, useEffect } from "react";

const TextBox = ({ handleChange, text, gameIsActive }) => {
  const inputElement = useRef(null);

  // useEffect(() => {
  //   if (gameIsActive) {
  //     inputElement.current.focus();
  //   }
  // }, [gameIsActive]);

  return (
    <textarea
      onChange={(e) => handleChange(e)}
      value={text}
      disabled={!gameIsActive}
      ref={inputElement}
    />
  );
};

export default TextBox;
