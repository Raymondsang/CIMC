import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="" alt="Logo" className="h-10 w-auto" />
        {/* <h1 className="text-xl font-bold ml-2">Your Company</h1> */}
      </div>

      <nav className="space-x-8">
        <a href="#services" className="text-black hover:text-gray-700">Services</a>
        <a href="#about" className="text-black hover:text-gray-700">About</a>
        <a href="#info-center" className="text-black hover:text-gray-700">Info Center</a>
      </nav>

      <div className="space-x-4">
        
        <Link to="/signin" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Sign In</Link>
        <Link to="/signup" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Sign Up</Link>
      </div>
    </header>
  );
}

export default Navbar;
