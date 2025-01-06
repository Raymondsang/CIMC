import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import logo from '../assets/images/CIMC logo_page-0001.jpg'; 


function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSigningUp(true);
    setErrorMessage("");
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      localStorage.setItem("username", username); // Store username in local storage
      setUsername("");
      setEmail("");
      setPassword("");
      console.log("Account created successfully");
      navigate("/Homepage"); 
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSigningUp(false);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-green-50">
      <motion.div
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center text-green-700">Sign Up</h3>
        <p className="text-sm mb-4 text-center text-green-600">Create an account to get started</p>
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Enter Your Username*"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="placeholder:text-green-700 bg-transparent py-2 my-2 border-b border-green-700 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-green-700 bg-transparent py-2 my-2 border-b border-green-700 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="placeholder:text-green-700 bg-transparent py-2 my-2 border-b border-green-700 focus:outline-none"
            required
          />
          <button
            type="submit"
            disabled={isSigningUp}
            className={`text-white py-2 my-4 w-full rounded transition-colors duration-200 ${
              isSigningUp ? "bg-green-300 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isSigningUp ? "Creating Account..." : "Sign Up"}
          </button>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          <div className="text-sm mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="text-green-600 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default SignUp;
