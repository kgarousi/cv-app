import React from 'react'

export default function LableInput ({htmlFor, type="text",text}) {

    const labelStyle = {
        paddingLeft: "2rem",
        paddingRight: "1rem",
        textDecoration: "underline" 
      }


  return (
        <div>
            <label style={labelStyle}>{text}</label>
            <input/><br />
        </div>
    )
}
