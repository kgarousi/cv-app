import React from 'react';

export default function LableInput({ type = "text", text, userData, handleChange, name }) {
  const labelStyle = {
    paddingLeft: "2rem",
    paddingRight: "1rem",
    textDecoration: "underline" 
  };

  return (
    <div>
      <label style={labelStyle}>{text}</label>
      <input
        type={type}
        value={userData}
        onChange={handleChange}
        name={name}
      /><br />
    </div>
  );
}
