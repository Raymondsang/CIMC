import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaUserTie,
  FaExternalLinkAlt,
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

const Financialmanagement = () => {
  const handleViewBrochure = () => {
    window.open("src/assets/documents/C3.pdf", "_blank");
  };

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
              Financial Management & Disbursement Training
            </motion.h1>
            <motion.h2 className="text-xl text-gray-600 mb-6">
              For Staff in Government/World Bank Funded Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Date & Location */}
              <motion.div variants={staggerContainer} className="space-y-3">
                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-2"
                >
                  <FaCalendarAlt className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700">3rd to 7th March, 2025</p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-2"
                >
                  <FaMapMarkerAlt className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700">
                    PrideInn Paradise Beach Resort & Spa Mombasa
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={staggerContainer} className="space-y-3">
                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-2"
                >
                  <FaBuilding className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700">
                    CORIASS INTEGRITY MANAGEMENT CONSULTANTS LTD. (CIMC)
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-2"
                >
                  <FaPhone className="w-5 h-5 text-green-700" />
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
                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-2"
                >
                  <FaEnvelope className="w-5 h-5 text-green-700" />
                  <p className="text-gray-700"><a href="mailto:Cimc@coriass.com">Cimc@coriass.com</a></p>
                </motion.div>
              </motion.div>
            </div>

            <motion.div variants={fadeIn} className="mt-6">
              <motion.button
                onClick={handleViewBrochure}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                View Training Brochure
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Course Overview */}
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaChartLine className="w-5 h-5 text-green-700" />
              <h2 className="text-xl font-bold">Course Overview</h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                This training equips participants with essential competencies to
                contribute towards proper financial management of projects
                financed by the World Bank and provides related practical skills
                to perform financial management related duties.
              </p>
              <p>
                The training will ensure compliance with financial management
                covenants in the financing agreement and subsidiary agreements.
              </p>
            </div>
          </motion.div>

          {/* Who Can Apply */}
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaUserTie className="w-5 h-5 text-green-700" />
              <h2 className="text-xl font-bold">Who Can Apply</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  role: "Project/Program Coordinators",
                  description: "Leaders managing World Bank funded projects",
                },
                {
                  role: "Managers & Technical Component Leads",
                  description: "Project management and technical specialists",
                },
                {
                  role: "Head of Finance and Accounting",
                  description: "Senior financial management professionals",
                },
                {
                  role: "Project Accountants",
                  description: "Professionals handling project finances",
                },
                {
                  role: "Finance Officers",
                  description: "Staff managing financial operations",
                },
                {
                  role: "Internal Auditors",
                  description: "Professionals ensuring financial compliance",
                },
              ].map((role, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-green-50 rounded-lg cursor-pointer"
                >
                  <h3 className="font-semibold text-green-800 mb-2">
                    {role.role}
                  </h3>
                  <p className="text-gray-600 text-sm">{role.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Registration CTA */}
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Ready to Enhance Your Financial Management Skills?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Financialmanagement;
