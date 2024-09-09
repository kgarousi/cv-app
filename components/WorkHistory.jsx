import React, { useState, useEffect } from 'react';
import LableInput from './LableInput';
import LableTextArea from './LableTextArea';

export default function WorkHistory({ index, onFormDataChange }) {
  const [tempInput, setTempInput] = useState({
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  // Only call onFormDataChange when tempInput changes
  useEffect(() => {
    if (typeof onFormDataChange === 'function') {
      onFormDataChange(index, tempInput); // Pass index and updated input data
    }
  }, [tempInput, onFormDataChange, index]); // Make sure dependencies are correct

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='work-history'>
      <LableInput
        type="text"
        text="Company: "
        userData={tempInput.company}
        handleChange={handleChange}
        name="company"
      />
      <LableInput
        type="text"
        text="Title: "
        userData={tempInput.title}
        handleChange={handleChange}
        name="title"
      />
      <LableInput
        type="date"
        text="Start Date: "
        userData={tempInput.startDate}
        handleChange={handleChange}
        name="startDate"
      />
      <LableInput
        type="date"
        text="End Date: "
        userData={tempInput.endDate}
        handleChange={handleChange}
        name="endDate"
      />
      <p style={{ textDecoration: "underline" }}>Description</p>
      <LableTextArea
        userData={tempInput.description}
        handleChange={handleChange}
        name="description"
      />
    </div>
  );
}
