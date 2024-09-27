import React from 'react'

export default function ContactInfo ({formData, handleFormData}) {

    const {firstName, lastName, email, phoneNumber} = formData

    const handleChange = (e) => {
        handleFormData(e.target.name, e.target.value)
    }

  return (
    <div>
        <label>First Name: </label>
        <input 
            name="firstName"
            value={firstName}
            onChange={handleChange}
        />
         <label>Last Name: </label>
        <input 
            name="lastName"
            value={lastName}
            onChange={handleChange}
        />
         <label>Phone Number: </label>
        <input 
        type='tel'
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
        />
         <label>Email: </label>
        <input 
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
        />
    </div>
  )
}
