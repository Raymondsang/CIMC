import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ArrowRight, BookOpen, Calendar, Target } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/images/CIMC logo_page-0001.jpg";

const Landing = () => {
  const [username, setUsername] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const services = [
    {
      title: "Corruption Risk Assessment",
      description: "Comprehensive analysis and mitigation strategies.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Research & Surveys",
      description: "Data-driven insights and actionable solutions.",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: "Peer Review Seminars",
      description: "Collaborative learning and development sessions.",
      icon: <Calendar className="w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen flex flex-col">
      <Navbar />

      <div className="text-center py-6">
        <p className="text-lg text-gray-700">
          {username ? `Welcome, ${username}!` : "Welcome, Guest!"}
        </p>
      </div>

      <main className="flex-1 flex flex-col items-center px-4 md:px-8 py-8">
        <div className="max-w-6xl w-full">
          {/* Hero Section with Logo Behind */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black rounded-xl overflow-hidden p-8 md:p-12 mb-12 text-white"
          >
            <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-green-400 to-transparent"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-10">
              {/* Logo placed behind the content */}
              <img src={logo} alt="Logo" className="w-1/2 sm:w-1/3 md:w-1/4 " />
            </div>
            <div className="relative z-10 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                CORIAS <span className="text-green-400">INTEGRITY</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8">
                Leading the way in organizational integrity and ethical business
                practices across Kenya and East Africa.
              </p>
              <Link
                to="/SignIn"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Our Services
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transform transition-all duration-300"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="flex items-center mb-4 text-green-500">
                    {service.icon}
                    <h3 className="ml-3 text-xl font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Publications & Events Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-green-500" />
                Latest Publications
              </h3>
              <ul className="space-y-4">
                {[1, 2].map((_, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-500 mr-4">
                      PDF
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Integrity Report {2024 - i}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Annual insights and analysis.
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                <Calendar className="w-6 h-6 mr-6 text-green-500" />
                Upcoming Events
              </h3>
              <ul className="space-y-8 space-x-4 m-2">
                {[
                  {
                    date: "3rd-7th March 2025",
                    name: "Monitoring and Evaluation Course for Project Implementation Units (PIUS)",
                    link: "/Monitoring",
                  },
                  {
                    date: "Coming soon",
                    name: "Environment, Social Health and Safety Training (ESHS)",
                    link: "/Eia",
                  },
                  {
                    date: "3rd-7th March 2025",
                    name: "Financial Management and Disbursement Training For Staff In Government/World Bank Funded Projects",
                    link: "/Financialmanagement",
                  },
                ].map((event, index) => (
                  <li
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-500 ">
                      {event.date}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {event.name}
                      </h4>
                     
                    </div>
                    <Link
                      to={event.link}
                      className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors m-2"
                    >
                      Learn More
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
