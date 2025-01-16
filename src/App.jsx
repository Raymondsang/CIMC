import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import Booking from './components/Booking';
import ContactForm from './components/ContactForm.jsx';
import Contact from './components/Contact.jsx';  
import About from './components/About.jsx';
// import Login from './components/Login.jsx';
// import Register from './components/Register.jsx';
import ForgotPassword from './components/Forgotpassword.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Monitoring from './components/Monitoring.jsx';
import Eia from './components/Eia.jsx';
import Financialmanagement from './components/Financialmanagement.jsx';
import Landing from './components/Landing.jsx';
import Services from './components/Services.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/register' element={<Register />} /> */}
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/ContactForm' element={<ContactForm />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Monitoring' element={<Monitoring />} />
        <Route path='/Eia' element={<Eia />} />
        <Route path='/Financialmanagement' element={<Financialmanagement />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;



