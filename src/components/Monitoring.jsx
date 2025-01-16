import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaUsers,
  FaDownload,
  FaFilePdf,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Monitoring = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        className="min-h-screen bg-green-50 p-8"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header Section */}
          <motion.div {...fadeIn} className="bg-white rounded-lg shadow-lg p-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-black mb-4"
            >
              Monitoring & Evaluation Training Program
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Date & Location */}
              <motion.div variants={staggerContainer} className="space-y-3">
                <motion.div variants={fadeIn} className="flex items-center gap-2">
                  <FaCalendarAlt className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700">March 3rd - 7th, 2025</p>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700">PrideInn Paradise Beach Resort & Spa Mombasa</p>
                </motion.div>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={staggerContainer} className="space-y-3">
                <motion.div variants={fadeIn} className="flex items-center gap-2">
                  <FaBuilding className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700">CORIASS INTEGRITY MANAGEMENT CONSULTANTS LTD. (CIMC) </p>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center gap-2">
                  <FaPhoneAlt className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700 space-y-1">
  <a
    href="tel:+254721810504"
    className="hover:text-green-500 transition-colors"
  >
    +254721810504
  </a>
  <br />
  <a
    href="tel:+254737554081"
    className="hover:text-green-500 transition-colors"
  >
    +254737554081
  </a>
</p>

                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center gap-2">
                  <FaEnvelope className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700"><a href="mailto:Cimc@coriass.com">Cimc@coriass.com</a></p>
                </motion.div>
              </motion.div>
            </div>

            {/* View Brochure Button */}
            <motion.div variants={fadeIn} className="mt-6">
              <a
                href="src/assets/documents/Training_Bronchure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
                >
                  <FaFilePdf className="w-4 h-4" />
                  View Training Brochure
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Course Content */}
          <motion.div variants={fadeIn}>
            <div className="bg-white rounded-lg shadow-lg">
              <div className="px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FaUsers className="w-5 h-5 text-green-700" />
                  Course Content
                </h2>
              </div>
              <div className="px-6 pb-4">
                <motion.div
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {[
                    {
                      title: "Understanding Monitoring and Evaluation",
                      description:
                        "Comprehensive introduction to M&E concepts and principles",
                    },
                    {
                      title: "M&E Frameworks and Systems",
                      description:
                        "Learn about different frameworks and systematic approaches",
                    },
                    {
                      title: "Monitoring Processes",
                      description: "Deep dive into effective monitoring methodologies",
                    },
                    {
                      title: "Innovative Monitoring Approaches",
                      description: "Explore modern and innovative monitoring techniques",
                    },
                    {
                      title: "Evaluations",
                      description:
                        "Understanding different types of evaluations and their applications",
                    },
                    {
                      title: "Engaging Stakeholders",
                      description:
                        "Strategies for effective stakeholder engagement",
                    },
                    {
                      title: "Practical Application",
                      description: "Hands-on exercises and real-world applications",
                    },
                    {
                      title: "Course Review and Feedback",
                      description: "Final review and participant feedback session",
                    },
                  ].map((topic, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-green-50 rounded-lg cursor-pointer"
                    >
                      <h3 className="font-semibold text-green-800 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{topic.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Registration CTA */}
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Ready to Enhance Your M&E Skills?
            </h2>
            <motion.a
  href="https://docs.google.com/forms/d/e/1FAIpQLSc0WuT4FqE2-wGGPilzCbzK4Ep8PD6OWHfouEy4qyEEANxh9Q/viewform?usp=dialog" // Replace this with your valid URL
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors inline-block"
>
  Register Now
</motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Monitoring;
