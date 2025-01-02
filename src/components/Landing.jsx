import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { ArrowRight, BookOpen, Calendar, Target } from 'lucide-react';
import { useAuth } from '../contexts/authContext';

const Landing = () => {

  const { currentUser } = useAuth()

  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Corruption Risk Assessment",
      description: "Comprehensive analysis and mitigation strategies",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Research & Surveys",
      description: "Data-driven insights and analysis",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Peer Review Seminars",
      description: "Collaborative learning and development",
      icon: <Calendar className="w-6 h-6" />,
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen flex flex-col">
      <Navbar />

      <div>
        Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in. 
      </div>
      
      <main className="flex-1 flex flex-col items-center px-4 md:px-8 py-12">
        <div className="max-w-7xl w-full">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-black p-8 md:p-12 mb-16">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#4ade80,_transparent_70%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
                CORIAS <span className="text-green-400">INTEGRITY</span>
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-300 mb-8">
                MANAGEMENT CONSULTANTS (K) LTD.
              </h3>
              <p className="text-gray-400 max-w-2xl mb-8 text-lg">
                Leading the way in organizational integrity and ethical business practices across Kenya and East Africa.
              </p>
              <Link 
                to="/SignIn" 
                className="inline-flex items-center px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transform hover:translate-x-2 transition-all duration-300 shadow-lg text-lg font-semibold group"
              >
                Get Started 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
  <div
    key={index}
    className="group relative bg-white rounded-2xl p-8 shadow-xl border border-green-200 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    onMouseEnter={() => setHoveredCard(index)}
    onMouseLeave={() => setHoveredCard(null)}
  >
    <div
      className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-100 transform origin-top-right transition-transform duration-500 -z-10"
      style={{
        transform: hoveredCard === index ? 'scale(1)' : 'scale(0)',
        borderRadius: '16px',
      }}
    />
    <div className="text-green-500">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800">
      {service.title}
    </h3>
    <p className="text-gray-600">
      {service.description}
    </p>
  </div>
))}

          </div>

          {/* Publications & Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-green-500" />
                Latest Publications
              </h3>
              <div className="space-y-4">
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-500 mr-4">
                      PDF
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Integrity Report {2024 - i}</h4>
                      <p className="text-sm text-gray-600">Annual analysis and insights</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-green-500" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-500 mr-4">
                      {`${i + 10} Dec`}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Integrity Workshop {i + 1}</h4>
                      <p className="text-sm text-gray-600">Virtual Training Session</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Landing;