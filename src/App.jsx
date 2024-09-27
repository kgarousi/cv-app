import { useState } from 'react'
import ContactInfo from './components/ContactInfo'

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  })

  function handleFormData (name, value){
    setFormData( prevFormData =>({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <>
      <ContactInfo handleFormData={handleFormData} formData={formData}/>
    </>
  )
}

export default App
