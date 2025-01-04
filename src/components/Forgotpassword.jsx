import React, { useState } from "react";
import { doSendPasswordResetEmail } from "../firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await doSendPasswordResetEmail(email);
      setMessage("Password reset email sent successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h3>
        <form onSubmit={handlePasswordReset} className="flex flex-col">
          <input
            type="email"
            placeholder="Enter Your Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-black bg-transparent py-2 my-2 border-b border-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-500 py-2 my-4 w-full rounded hover:bg-purple-700 transition-colors duration-200"
          >
            Reset Password
          </button>
          {message && <p className="text-green-500 text-center">{message}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
