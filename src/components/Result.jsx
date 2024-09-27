import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Result() {

    const location = useLocation();
    const { formData } = location.state || {};

  return (
    <div>{formData.firstName}</div>
  )
}
