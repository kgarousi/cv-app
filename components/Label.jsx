import React from 'react'

export default function LableInput ({htmlFor, type="text",text}) {

    const labelStyle = {
        paddingLeft: "2rem"   
      }


  return (
        <div>
            <label style={labelStyle}>{text}</label>
            <input/><br />
        </div>
    )
}
