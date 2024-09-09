import './App.css';
import ContactInfo from '../components/ContactInfo';
import Education from '../components/Education';
import WorkHistory from '../components/WorkHistory';
import Results from '../components/Results'; // Import Results component
import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    school: '',
    startDate: '',
    endDate: '',
    major: '',
    degreeType: ''
  });

  const [workHistory, setWorkHistory] = useState([]);

  const handleFormDataChange = useCallback((formData) => {
    setFormData(prevState => ({ ...prevState, ...formData }));
  }, []);

  const handleWorkHistoryChange = useCallback((index, data) => {
    setWorkHistory(prevWorkHistory => 
      prevWorkHistory.map((item, i) =>
        i === index ? { ...item, ...data } : item
      )
    );
  }, []);

  const handleAddWork = () => {
    setWorkHistory(prevWorkHistory => [
      ...prevWorkHistory,
      { id: prevWorkHistory.length, title: '', company: '', startDate: '', endDate: '', description: '' }
    ]);
  };

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSubmit = () => {
    // You can perform additional logic here if needed, such as validation

    navigate('/results', {state: {formData, workHistory}}); // Navigate to the Results page
  };

  return (
    <>
      <h1>Resume</h1>
      <ContactInfo onFormDataChange={handleFormDataChange} />
      <h1 style={{ textAlign: 'center' }}>Educational Background</h1>
      <Education onFormDataChange={handleFormDataChange} />
      <h1 style={{ textAlign: 'center' }}>Work History</h1>
      {workHistory.map((item, index) => (
        <WorkHistory
          key={item.id}
          index={index}
          onFormDataChange={handleWorkHistoryChange}
        />
      ))}
      <button type="button" onClick={handleAddWork}>Add Work History</button>
      <div className='submit'>
        <button type="button" style={{ marginLeft: "auto", marginTop: "auto" }} onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/results" element={<Results />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default AppWrapper;
