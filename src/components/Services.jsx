import React from 'react';
import { Activity, ShoppingBag, Trees, Target, BarChart2, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Services = () => {
  const services = [
    {
      title: "Financial Management Training",
      description: "Comprehensive training programs designed to enhance financial management capabilities in donor-funded projects. Our expert-led sessions cover essential aspects of financial stewardship and compliance.",
      icon: <Activity className="w-12 h-12 text-green-500" />,
      placeholder: "src/assets/images/financialmanagement.jpg",
      benefits: [
        "Budget preparation and management",
        "Financial reporting and documentation",
        "Audit preparation and compliance",
        "Cash flow management",
        "Financial control systems"
      ]
    },
    {
      title: "Procurement Training",
      description: "Expert guidance on procurement processes specifically tailored for donor-funded projects. Learn international best practices and compliance requirements for effective procurement management.",
      icon: <ShoppingBag className="w-12 h-12 text-green-500" />,
      placeholder: "src/assets/images/wallpaper3.jpg",
      benefits: [
        "Procurement planning and strategy",
        "Bid evaluation and management",
        "Contract administration",
        "Risk management in procurement",
        "Compliance with donor guidelines"
      ]
    },
    {
      title: "Environmental & Social Safeguards",
      description: "Comprehensive training on managing environmental and social impacts in donor-funded projects. Learn to implement effective safeguard measures and ensure project sustainability.",
      icon: <Trees className="w-12 h-12 text-green-500" />,
      placeholder: "src/assets/images/environmental.jpg",
      benefits: [
        "Environmental impact assessment",
        "Social risk management",
        "Stakeholder engagement",
        "Compliance monitoring",
        "Sustainable development practices"
      ]
    },
    {
      title: "Project Management",
      description: "Complete project management training covering all aspects of donor-funded project lifecycle. Develop skills to effectively plan, execute, and monitor project activities.",
      icon: <Target className="w-12 h-12 text-green-500" />,
      placeholder: "src/assets/images/projectmanagement.jpg",
      benefits: [
        "Project planning and scheduling",
        "Risk management",
        "Team leadership and coordination",
        "Progress monitoring and reporting",
        "Stakeholder management"
      ]
    },
    {
      title: "Monitoring & Evaluation",
      description: "Strategic M&E training to enhance project tracking and assessment capabilities. Learn to design and implement effective monitoring systems and conduct meaningful evaluations.",
      icon: <BarChart2 className="w-12 h-12 text-green-500" />,
      placeholder: "src/assets/images/monitoringEvaluation.jpg",
      benefits: [
        "M&E framework development",
        "Data collection and analysis",
        "Impact assessment",
        "Results-based management",
        "Performance reporting"
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{
                  animation: `slideUp 0.8s ease-out ${index * 0.2}s backwards`
                }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={service.placeholder}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-white transform scale-150">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h2 className="text-2xl font-bold ml-4">{service.title}</h2>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <h3 className="font-semibold text-lg mb-4">Key Benefits:</h3>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/ContactForm`}
                      className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 group"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
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
          `}
        </style>
      </div>
      <Footer />
    </div>
  );
};

export default Services;