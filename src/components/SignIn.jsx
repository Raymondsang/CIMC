import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "./Firebase/auth";
import { useAuth} from "../contexts/authContext";
import { auth } from "./Firebase/FirebaseConfig";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {

  const { userLoggedIn } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!isSigningIn) {
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email, password)
    };

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(() => {
  //       toast.success("Successfully logged in!", {
  //         position: "top-center",
  //         autoClose: 3000,
  //       });
  //       setTimeout(() => navigate("/"), 3000); // Redirect after toast
  //     })
  //     .catch((err) => setError(err.message));
  // };

  const onGoogleSignIn = (e) => {
    e.preventDefault()
    if(!isSigningIn) {
      setIsSigningIn(true)
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false)
      })
    }

  }

  const handleSignUpRedirect = () => {
    navigate("/signup");
    toast.success("Account created successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <Navbar />
      
      {/* Toast Notifications */}
      <ToastContainer />

      {userLoggedIn && (<Navigate to={'/Landing'} replace={true} />)}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome Back
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Sign in to access your account and manage your appointments
          </p>
        </div>

        {/* Sign In Card */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSignIn} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group relative w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSignUpRedirect}
                className="w-full bg-green-50 text-gray-800 py-3 rounded-lg hover:bg-green-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                Create New Account
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center text-gray-600">
            <p>Need help? <button className="text-green-600 hover:text-green-700">Contact Support</button></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
