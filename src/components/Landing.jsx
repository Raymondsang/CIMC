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
import React from "react";
import { useNavigate } from 'react-router-dom';


const Landing = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <nav className="flex justify-between w-full max-w-5xl mb-8">
        <div className="flex space-x-16 ml-52">
          <button className="font-bold text-xl text-slate-950 hover:text-green-950">
            Services
          </button>
          <button className="font-bold text-xl text-slate-950 hover:text-green-950">
            About
          </button>
          <button className="font-bold text-xl text-slate-950 hover:text-green-950">
            Info Center
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-500 ">
            Sign In
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-500">
            Book An Appointment
          </button>
        </div>
      </nav>
      <div className=" justify-between items-start p-4 mt-36">
        <div className="flex">
          <h1 className="text-3xl font-bold mb-16 mr-16 border p-4 bg-white rounded-xl shadow-md">
            CORIASS INTEGRITY MANAGEMENT CONSULTANTS (K) LTD.
          </h1>

          <div className="mb-6 border p-4 bg-white rounded-xl shadow-md flex-grow">
            <h2 className="text-2xl font-semibold">Publications.</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Corruption Risk Assessment and Risk Mitigation</li>
              <li>Research and Survey Services</li>
              <li>Peer Review Seminars</li>
              <li>Capacity Building and Training</li>
            </ul>
          </div>
        </div>

        <div className="flex-col-reverse border p-4 bg-white rounded-xl shadow-md mt-12">
          <div>
            
            <h1 className="font-black ml-8 text-xl">Our Services.</h1>
            <ul className="list-disc list-inside mt-2">
              <li>Corruption Risk Assessment and Risk Mitigation</li>
              <li>Research and Survey Services</li>
              <li>Peer Review Seminars</li>
              <li>Capacity Building and Training</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-3/4 max-w-2xl mt-12">
        <div className="flex space-x-4">
          <button className="bg-black text-white p-2 rounded-xl hover:bg-green-700">
            Get Started
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-green-700">
            Contact Us
          </button>
        </div>

        <div border className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <ul>
            <li>1.</li>
            <li>2.</li>
            <li>3.</li>
            <li>4.</li>
            <li>5.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
