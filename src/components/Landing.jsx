import React from 'react';
import Navbar from './Navbar'; 
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col">
      
      <Navbar />

      
      <main className="flex flex-col items-center p-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          CORIAS INTEGRITY MANAGEMENT CONSULTANTS (K) LTD.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold mb-2">Our Services</h3>
            <ul className="list-disc list-inside">
              <li>Corruption Risk Assessment and Risk Mitigation</li>
              <li>Research and Survey Services</li>
              <li>Peer Review Seminars</li>
              <li>Capacity Building and Trainings</li>
            </ul>
          </div>

          {/* Publications Section */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold mb-2">Publications</h3>
            <p className="text-gray-600">Details about recent publications go here.</p>
          </div>

          {/* Upcoming Events Section */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold mb-2">Upcoming Events</h3>
            <p className="text-gray-600">Details about upcoming events go here.</p>
          </div>
        </div>

        
        <div className="flex space-x-4">
          <Link to="/contact" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Contact Us</Link>
          <Link to="/ContactForm" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Talk to a Consultant</Link>
        </div>
      </main>

      
      <footer className="bg-green-900 text-white p-4 mt-auto">
        <div className="text-center space-y-2">
          <p>NBK Building, Harambee Avenue</p>
          <p>Tel: 0202323175/6. FAX: 0202323289</p>
          <p>Email: cimc@corias.com</p>
          <p className="font-bold">PREVENTION IS THE CURE CIMC (K)</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
