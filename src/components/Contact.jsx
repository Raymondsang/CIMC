import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4"><strong>Email:</strong> cimc@corias.com</p>
        <p className="text-lg mb-4"><strong>Phone:</strong> 0202323175/6</p>
        <p className="text-lg mb-4"><strong>Fax:</strong> 0202323289</p>
        <p className="text-lg mb-4"><strong>Opening Hours:</strong> 8 am - 4 pm</p>
        <p className="text-lg"><strong>Address:</strong> 123 Main St, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
