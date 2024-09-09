import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { formData, workHistory } = location.state || {}; // Access the state passed during navigation

  return (
    <div>
      <h1>Results Page</h1>
      <h2><strong>Contact Info</strong></h2>
      <p><strong>First Name:</strong> {formData.firstName} </p>
      <p><strong>Last Name:</strong> {formData.lastName} </p>
      <p><strong>Email:</strong> {formData.email} </p>
      <p><strong>Phone Number</strong> {formData.phoneNumber} </p>
      <h2>Work History</h2>
      {workHistory.length > 0 ? (
        <ul>
          {workHistory.map((work, index) => (
            <li key={index}>
              <h3>Company: {work.company}</h3>
              <p>Title: {work.title}</p>
              <p>Start Date: {work.startDate}</p>
              <p>End Date: {work.endDate}</p>
              <p>Description: {work.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No work history available</p>
      )}
    </div>
  );
}

export default Results;
