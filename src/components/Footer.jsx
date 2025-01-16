import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white">
      <div className="max-w-6xl mx-auto p-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 w-fit">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:text-green-300 transition-colors">
                <MapPin size={20} />
                <p>NBK Building, Harambee Avenue</p>
              </div>
              <div className="flex items-center space-x-3 hover:text-green-300 transition-colors">
                <Phone size={20} />
                <p>Tel: +254721810504 <br /> Tel: +254737554081  </p>
              </div>
              <div className="flex items-center space-x-3 hover:text-green-300 transition-colors">
                <Mail size={20} />
                <p>cimc@corias.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 w-fit">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="/About" className="block hover:text-green-300 transition-colors">About Us</a>
              <a href="/Services" className="block hover:text-green-300 transition-colors">Services</a>
              {/* <a href="#" className="block hover:text-green-300 transition-colors">News & Updates</a>
              <a href="#" className="block hover:text-green-300 transition-colors">Career</a> */}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 w-fit">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors transform hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors transform hover:scale-110">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-green-700 text-center">
          <p className="font-bold animate-pulse">
            PREVENTION IS THE CURE CIMC (K)
          </p>
          <p className="text-sm mt-2 text-green-200">
            © {new Date().getFullYear()} CIMC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;