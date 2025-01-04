import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "./Firebase/auth";
import { auth } from "./Firebase/FirebaseConfig"; 
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import { doSignOut } from "./Firebase/auth";

const SignUp = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("")
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!isSigningIn) {
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email, password)
    };
  }

  return (
    
    <div>
      <Navbar />
      {userLoggedIn && (<Navigate to={'/Landing'} replace={true} />)}
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <form className="p-10 bg-white rounded-xl shadow-md w-96">
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
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-green-700"
        >
          Sign Up
        </button>
        
        
        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account? 
            <button 
              onClick={() => navigate("/signin")}
              className="text-green-700 underline ml-1">
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
    <Footer />
    </div>
   
  );
}

export default SignUp;