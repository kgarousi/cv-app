import React from 'react';
import './styles.css';
import LableInput from './LabelInput';

export default function ContactInfo() {

  return (
    <div>
      <form className='contact-info'>
          <LableInput type="text" text="First Name: "/>
          <LableInput type="text" text="Last Name: "/>
          <LableInput type="email" text="Email: "/>
          <LableInput type="tel" text="Phone Number: "/>
      </form>
    </div>
  );
}
