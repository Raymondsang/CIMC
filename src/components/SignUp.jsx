import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase/FirebaseConfig";  

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");  // Navigate to landing/home page on successful sign-up
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <form className="p-10 bg-white rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleSignUp}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Sign Up
        </button>
        
        
        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account? 
            <button 
              onClick={() => navigate("/signin")}
              className="text-blue-500 underline ml-1">
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;