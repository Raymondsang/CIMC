import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Activity, ShoppingBag, Trees, Target, BarChart2 } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const services = [
    {
      title: "Financial Management Training",
      icon: <Activity className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Procurement Training",
      icon: <ShoppingBag className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Environmental & Social Safeguards",
      icon: <Trees className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Project Management",
      icon: <Target className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Monitoring & Evaluation",
      icon: <BarChart2 className="w-5 h-5" />,
      path: "/services"
    }
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-green-100 relative z-50">
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
                  isActiveRoute('/') ? 'text-green-600' : 'text-gray-800'
                }`}
              >
                <span className="text-lg font-semibold hover:text-green-600 transition-colors">
                  Home
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                  isActiveRoute('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 text-lg font-semibold ${
                    isDropdownOpen ? 'text-green-600' : 'text-gray-800'
                  } hover:text-green-600 transition-colors py-2`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu with updated styling */}
                <div
                  className={`absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg py-2 transition-all duration-200 border border-gray-100
                    ${isDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}
                  `}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  style={{
                    zIndex: 1000,
                    backgroundColor: 'rgba(255, 255, 255, 0.98)'
                  }}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="text-green-500">{service.icon}</span>
                      <span className="font-medium">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/about" 
                className={`relative group py-2 ${
                  isActiveRoute('/about') ? 'text-green-600' : 'text-gray-800'
                }`}
              >
                <span className="text-lg font-semibold hover:text-green-600 transition-colors">
                  About
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                  isActiveRoute('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
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

        {/* Mobile Menu - Updated z-index */}
        <div 
          className={`
            absolute top-0 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
          `}
          style={{ zIndex: 1000 }}
        >
          <div className="p-4 pt-24 pb-8 space-y-6">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className={`text-lg font-semibold ${isActiveRoute('/') ? 'text-green-600' : 'text-gray-800'} hover:text-green-600 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Menu */}
              <div className="space-y-3">
                <div className="text-lg font-semibold text-gray-800">Services</div>
                <div className="pl-4 space-y-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-green-500">{service.icon}</span>
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/about" 
                className={`text-lg font-semibold ${isActiveRoute('/about') ? 'text-green-600' : 'text-gray-800'} hover:text-green-600 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu - Updated z-index */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 md:hidden"
          style={{ zIndex: 999 }}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;