import React from 'react';
import './styles.css';

export default function ContactInfo() {
  return (
    <div>
      <form className='contact-info'>
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="fname" /><br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="telnum">Phone Number:</label>
        <input type="tel" id="telnum" name="telnum" /><br />
      </form>
    </div>
  );
}
