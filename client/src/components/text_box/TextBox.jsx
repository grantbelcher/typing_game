import React from "react";

const TextBox = ({ handleChange, text }) => {
  return <textarea onChange={(e) => handleChange(e)} value={text} />;
};

export default TextBox;
