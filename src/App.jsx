import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ContactInfo from './components/ContactInfo';
import Result from './components/Result';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const navigate = useNavigate();

  function handleFormData(name, value) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit() {
    navigate("/result", {state: {formData}});
  }

  return (
    <>
      <ContactInfo formData={formData} handleFormData={handleFormData} />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </>
  );
}

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default Main;
