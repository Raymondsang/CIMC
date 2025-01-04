import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.jsx';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import Booking from './components/Booking';
import ContactForm from './components/ContactForm.jsx';
import Contact from './components/Contact.jsx';  
import About from './components/About.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/SignIn" element={<SignIn />} /> */}
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
        <Route path='/booking' element={<Booking />} />
        <Route path='/ContactForm' element={<ContactForm />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;



