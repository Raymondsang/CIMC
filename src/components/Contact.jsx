import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    
    <div>
    <Navbar />
    <div className="bg-green-200 min-h-screen flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4"><strong>Email:</strong> cimc@corias.com</p>
        <p className="text-lg mb-4"><strong>Phone:</strong> 0202323175/6</p>
        <p className="text-lg mb-4"><strong>Fax:</strong> 0202323289</p>
        <p className="text-lg mb-4"><strong>Opening Hours:</strong> 8 am - 4 pm,<br /> Monday-Friday</p>
        <p className="text-lg"><strong>Address:</strong> NBK Building, Harambee Avenue, Nairobi, Kenya</p>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default Contact;
