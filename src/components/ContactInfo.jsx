import React from 'react'
export default function ContactInfo ({formData, handleFormData}) {
    
    //destructure props from formData
 const {firstName, lastName, email, phoneNumber} = formData

 //handle change of data event, pass changed data to handleFormData to update state in parent component
const handleFormDataChange = (e) =>{
    handleFormData(e.target.name, e.target.value)
}

return(
    <>  \
        <div className='contact-info'>
            <label >First Name: </label>
            <input 
                name="firstName" 
                value={firstName} 
                onChange={handleFormDataChange}/>
            <label >Last Name: </label>
            <input 
                name="firstName" 
                value={lastName} 
                onChange={handleFormDataChange}/>
             <label >Email : </label>
            <input 
                name="email" 
                value={email}
                type="email" 
                onChange={handleFormDataChange}/>
             <label >Phone Number: </label>
            <input 
                name="phoneNumber"
                type="tel" 
                value={phoneNumber} 
                onChange={handleFormDataChange}/>
        </div>
    </>
)
}
