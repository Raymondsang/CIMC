// import React from 'react'

// const Landing = () => {
//   return (
//     <div className="">
//         <div>
//             <nav className="m-8">
//                 <button>Services</button>
//                 <button>About</button>
//                 <button>Info Center</button>
//                 <div>
//                      <button>Sign In</button>
//                      <button>Sign Up</button>
//                 </div>
               
//             </nav>
//         </div>
//         <div>
//             CORIASS INTEGRITY MANAGEMENT CONSULTANTS (K) LTD.
//         </div>
//         <div>
//             <div>Publications.</div>
//             <p></p>
//         </div>
//         <div>
//             <ul>
//                 <li>Corruption Risk Assesment and Risk Mitigation.</li>
//                 <li>Research and Survey Services.</li>
//                 <li>Peer Review Seminars.</li>
//                 <li>Capacity Building and Training.</li>
//             </ul>
//         </div>
//         <div>
//         <div>
//             <button>Get started</button>
//         </div>
//         <div>
//             <button>Contact Us</button>
//         </div>
//         </div>
//         <div>
//             <p>Upcoming Events.</p>
//         </div>
//     </div>
//   )
// }

// export default Landing
import React from 'react';

const Landing = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <nav className="flex justify-between w-full max-w-5xl mb-8">
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-blue-500">Services</button>
          <button className="text-gray-700 hover:text-blue-500">About</button>
          <button className="text-gray-700 hover:text-blue-500">Info Center</button>
        </div>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-500">Sign In</button>
          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-500">Sign Up</button>
        </div>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-left">
        CORIASS INTEGRITY MANAGEMENT CONSULTANTS (K) LTD.
      </h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Publications</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Corruption Risk Assessment and Risk Mitigation</li>
          <li>Research and Survey Services</li>
          <li>Peer Review Seminars</li>
          <li>Capacity Building and Training</li>
        </ul>
      </div>

      <div className="flex space-x-4 mb-8">
        <button className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-black">Get Started</button>
        <button className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-black">Contact Us</button>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        {/* You can add event details here */}
      </div>
    </div>
  );
};

export default Landing;
