import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Booking from './components/Booking';
import ContactForm from './components/ContactForm.jsx';
import Contact from './components/Contact.jsx';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/ContactForm' element={<ContactForm />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;



