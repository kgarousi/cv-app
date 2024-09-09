import React, { useState, useEffect } from 'react';
import LableInput from './LableInput';
import '/src/styles/styles.css';

export default function Education({ onFormDataChange }) {
  const [tempInput, setTempInput] = useState({
    school: '',
    startDate: '',
    endDate: '',
    major: '',
    degreeType: ''
  });

  useEffect(() => {
    if (typeof onFormDataChange === 'function') {
      onFormDataChange(tempInput);
    }
  }, [tempInput, onFormDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='education'>
      <LableInput
        type="text"
        text="College or University: "
        userData={tempInput.school}
        handleChange={handleChange}
        name="school"
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
      <LableInput
        type="text"
        text="Degree Received: "
        userData={tempInput.degreeType}
        handleChange={handleChange}
        name="degreeType"
      />
      <LableInput
        type="text"
        text="Major: "
        userData={tempInput.major}
        handleChange={handleChange}
        name="major"
      />
    </div>
  );
}

