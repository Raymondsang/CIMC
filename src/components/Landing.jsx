import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShoppingBag, Trees, Target, BarChart2, ArrowRight, Users, Award, Building } from 'lucide-react';
import wallpaper from '../assets/images/wallpaper1.jpg';
import Footer from './Footer';
import Navbar from './Navbar';

const LandingPage = () => {
  const services = [
    {
      title: "Financial Management Training",
      description: "Comprehensive training on financial management practices for donor-funded projects.",
      icon: <Activity className="w-8 h-8" />,
      link: "/financial-management"
    },
    {
      title: "Procurement Training",
      description: "Expert guidance on procurement processes in donor-funded projects.",
      icon: <ShoppingBag className="w-8 h-8" />,
      link: "/procurement"
    },
    {
      title: "Environmental & Social Safeguards",
      description: "Training on environmental and social impact management in donor projects.",
      icon: <Trees className="w-8 h-8" />,
      link: "/safeguards"
    },
    {
      title: "Project Management",
      description: "Comprehensive project management training for donor-funded initiatives.",
      icon: <Target className="w-8 h-8" />,
      link: "/project-management"
    },
    {
      title: "Monitoring & Evaluation",
      description: "Strategic M&E training for effective project tracking and assessment.",
      icon: <BarChart2 className="w-8 h-8" />,
      link: "/monitoring"
    },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "500+", label: "Professionals Trained" },
    { icon: <Award className="w-8 h-8" />, value: "50+", label: "Training Programs" },
    { icon: <Building className="w-8 h-8" />, value: "20+", label: "Development Partners" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section with Wallpaper */}
      <div className="relative h-[70vh] bg-black">
        <img 
          src={wallpaper}
          alt="Hero" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div 
            className="text-center text-white px-4"
            style={{
              animation: "fadeInUp 1s ease-out"
            }}
          >
            <h1 className="text-5xl font-bold mb-6">CORIAS INTEGRITY</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Leading the way in organizational integrity and ethical business practices across Kenya and East Africa.
            </p>
            <Link
              to="/SignIn"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-12"
            style={{
              animation: "fadeIn 1s ease-out"
            }}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                style={{
                  animation: `slideUp 0.8s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div className="text-green-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-green-500 hover:text-green-600 group"
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section with Stats */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-8"
            style={{
              animation: "fadeIn 1s ease-out"
            }}
          >
            Who We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="text-lg text-gray-700 leading-relaxed"
              style={{
                animation: "slideRight 1s ease-out"
              }}
            >
              <p className="mb-6">
                CORIAS Integrity is a leading consultancy firm specializing in capacity building 
                and training for donor-funded projects across East Africa. With years of expertise 
                in financial management, procurement, environmental safeguards, and project 
                management, we empower organizations to achieve their objectives while maintaining 
                the highest standards of integrity and compliance.
              </p>
              <p>
                We pride ourselves on our deep understanding of donor requirements, local contexts, 
                and international best practices. Our comprehensive training programs are designed 
                to address the unique challenges faced by project implementation units, ensuring 
                sustainable development impact while maintaining strict adherence to donor 
                guidelines and procedures.
              </p>
            </div>
            <div 
              className="grid grid-cols-1 gap-8"
              style={{
                animation: "slideLeft 1s ease-out"
              }}
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-green-500 mr-6">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeInUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideRight {
            from { 
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideLeft {
            from { 
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <Footer />
    </div>
  );
};

export default LandingPage;