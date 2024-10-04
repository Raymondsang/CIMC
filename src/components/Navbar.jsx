import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <button> <img src="src/assets/images/CIMC logo_page-0001.jpg" alt="Logo" className="h-14 w-auto" /></button>
       
      </div>

      <nav className="space-x-8">
        <a href="services" className="text-black text-xl hover:text-gray-700 font-extrabold">Services</a>
        <a href="about" className="text-black text-xl hover:text-gray-700 font-extrabold">About</a>
        <a href="info-center" className="text-black text-xl hover:text-gray-700 font-extrabold">Info Center</a>
      </nav>

      <div className="space-x-4">
        
        <Link to="/signin" className="px-4 py-2 bg-black text-white rounded-md hover:bg-green-700">Sign In</Link>
       
        <Link to="/Booking" className="px-4 py-2 bg-black text-white rounded-md hover:bg-green-700">Book an Appointment</Link>
      </div>
    </header>
  );
}git 

export default Navbar;
