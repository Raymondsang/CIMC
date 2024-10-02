import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './Firebase/FirebaseConfig';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form change and input value updates 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
  
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setMessage('Please fill in all fields.');
      setLoading(false);
      return;
    }
  
    try {
      // Send booking data to Firestore
      const docRef = await addDoc(collection(db, "bookings"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        createdAt: new Date()
      });
  
      console.log("Document written with ID: ", docRef.id);
      setMessage('Booking successful!');
    } catch (error) {
      console.error('Error adding document: ', error);
      setMessage('Error booking appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  
  // // Handle form submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage('');
  
  //   // Basic input validation
  //   if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
  //     setMessage('Please fill in all fields.');
  //     setLoading(false);
  //     return;
  //   }
  
  //   // Logging the form data for debugging
  //   console.log('Sending data:', formData);
  
  //   // Send booking data to backend
  //   try {
  //     const response = await fetch('http://localhost:5000/api/book', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         userName: formData.name,
  //         userEmail: formData.email,
  //         appointmentDetails: `Phone: ${formData.phone}, Date: ${formData.date}, Time: ${formData.time}`,
  //       }),
  //     });
  
  //     const result = await response.json();
  //     console.log('Backend Response:', result); // Add this line to log the response
  
  //     if (response.ok) {
  //       setMessage(result.message);
  //     } else {
  //       setMessage('Error: ' + result.message);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setMessage('Error booking appointment. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {loading ? 'Booking...' : 'Book Appointment'}
        </button>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default Booking;
