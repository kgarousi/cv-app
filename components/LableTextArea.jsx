import React from 'react';
import '/src/styles/styles.css'

export default function LableTextArea({ type = "text", text, userData, handleChange, name }) {
  const labelStyle = {
    paddingLeft: "2rem",
    paddingRight: "1rem",
    textDecoration: "underline", 
  };
  const textAreaStyle = {
    width: "20rem",
    height: "10rem",
    caretColor: "black"
  }

  return (
    <div>
      <label style={labelStyle}>{text}</label>
      <textarea style={textAreaStyle}
        value={userData}
        onChange={handleChange}
        name={name}
      /><br />
    </div>
  );
}