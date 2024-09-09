import React, { useState, useEffect } from 'react';
import '/src/styles/styles.css';
import LableInput from './LableInput';

export default function ContactInfo({ onFormDataChange }) {
  const [tempInput, setTempInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  useEffect(() => {
    onFormDataChange(tempInput);
  }, [tempInput, onFormDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='contact-info'>
      <LableInput
        type="text"
        text="First Name: "
        userData={tempInput.firstName}
        handleChange={handleChange}
        name="firstName"
      />
      <LableInput
        type="text"
        text="Last Name: "
        userData={tempInput.lastName}
        handleChange={handleChange}
        name="lastName"
      />
      <LableInput
        type="email"
        text="Email: "
        userData={tempInput.email}
        handleChange={handleChange}
        name="email"
      />
      <LableInput
        type="tel"
        text="Phone Number: "
        userData={tempInput.phoneNumber}
        handleChange={handleChange}
        name="phoneNumber"
      />
    </div>
  );
}
