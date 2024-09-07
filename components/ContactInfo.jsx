import React from 'react';
import './styles.css';
import LableInput from './Label';

export default function ContactInfo() {

  return (
    <div>
      <form className='contact-info'>
          <LableInput type="text" text="First Name: "/>
          <LableInput type="text" text="Last Name: "/>
      </form>
    </div>
  );
}
