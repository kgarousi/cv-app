import React from 'react';
import './styles.css';

export default function ContactInfo() {
  return (
    <div>
      <form className='contact-info'>
        <section className='contact-info--subsection'>
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname" /><br />
        </section>
        <section className='contact-info--subsection'>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" /><br />
        </section>
        <section className='contact-info--subsection'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" /><br />
        </section>
        <section className='contact-info--subsection'>
          <label htmlFor="telnum">Phone Number:</label>
          <input type="tel" id="telnum" name="telnum" /><br />
        </section>
      </form>
    </div>
  );
}
