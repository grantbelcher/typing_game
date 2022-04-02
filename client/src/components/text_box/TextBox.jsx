import React from "react";

const TextBox = ({ handleChange, text, gameIsActive }) => {
  return (
    <textarea
      onChange={(e) => handleChange(e)}
      value={text}
      disabled={!gameIsActive}
    />
  );
};

export default TextBox;
