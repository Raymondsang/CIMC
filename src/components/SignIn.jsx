import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase"; // Update the import
import { doSignInWithEmailAndPassword } from "../firebase/auth";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    setErrorMessage("");
    try {
      await doSignInWithEmailAndPassword(email, password);
      if (rememberMe) {
        localStorage.setItem("userEmail", email);
      }
      setEmail("");
      setPassword("");
      console.log("Login successful");
      navigate("/Homepage");
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSigningIn(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google login successful");
      navigate("/Homepage");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-green-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center text-green-700">Sign In</h3>
        <p className="text-sm mb-4 text-center text-green-600">
          Welcome back! Please enter your details
        </p>
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Enter Your Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-green-700 bg-transparent py-2 my-2 border-b border-green-700 focus:outline-none"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-green-700 bg-transparent py-2 my-2 border-b border-green-700 focus:outline-none w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2 right-2 text-green-600 hover:text-green-800 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex items-center my-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm text-green-700">Remember Me</label>
          </div>
          <button
            type="submit"
            disabled={isSigningIn}
            className={`text-white py-2 my-4 w-full rounded transition-colors duration-200 ${
              isSigningIn
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isSigningIn ? "Signing In..." : "Sign In"}
          </button>

          <button
            onClick={handleGoogleLogin}
            className="text-white py-2 my-4 w-full bg-blue-600 hover:bg-blue-700 rounded"
          >
            Sign in with Google
          </button>

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          <div className="text-sm mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
