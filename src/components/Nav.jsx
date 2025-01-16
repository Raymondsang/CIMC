import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem("username"); // Clear the session
    navigate("/"); // Redirect to the landing page
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20 pb-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="src/assets/images/CIMC-removebg.png"
                alt="Logo"
                className="h-14 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              <Link
                to="/"
                className={`relative group py-2 ${
                  isActiveRoute("/") ? "text-green-600" : "text-gray-800"
                }`}
              >
                <span className="text-lg font-semibold hover:text-green-600 transition-colors">
                  Home
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                    isActiveRoute("/") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                to="/about"
                className={`relative group py-2 ${
                  isActiveRoute("/about") ? "text-green-600" : "text-gray-800"
                }`}
              >
                <span className="text-lg font-semibold hover:text-green-600 transition-colors">
                  About
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                    isActiveRoute("/about") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>

              {/* Book Appointment Button */}
              <Link
                to="/Booking"
                className="px-6 py-2 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Book Appointment
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500 text-white rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="p-4 pt-24 pb-8 space-y-6">
            <nav className="flex flex-col space-y-6">
              <Link
                to="/"
                className={`text-lg font-semibold ${
                  isActiveRoute("/") ? "text-green-600" : "text-gray-800"
                } hover:text-green-600 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-lg font-semibold ${
                  isActiveRoute("/about") ? "text-green-600" : "text-gray-800"
                } hover:text-green-600 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/Booking"
                className="px-6 py-3 text-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </nav>
            <div className="flex flex-col space-y-4">
              <button
                onClick={handleLogout}
                className="px-6 py-3 text-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Nav;
