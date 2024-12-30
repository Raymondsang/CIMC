import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Eye, Target, Heart } from 'lucide-react';

const About = () => {
  const sections = [
    {
      title: "Vision",
      icon: <Eye className="w-8 h-8 text-green-500" />,
      content: "To be a leading institution in the development and promotion of economical and comprehensive corruption prevention strategies to enhance integrity, prudent management of resources, risk management and effective service delivery in the region."
    },
    {
      title: "Mission",
      icon: <Target className="w-8 h-8 text-green-500" />,
      content: "To enhance prudent management and improve service delivery by promoting integrity and corruption free institutions through conducting of corruption risk assessments, development of governance instruments, best practice guidelines, risk management tools, training, empowerment, monitoring and evaluation and research."
    },
    {
      title: "Core Values",
      icon: <Heart className="w-8 h-8 text-green-500" />,
      content: "To foster its vision, mission and objectives, CIMC is guided by strong core values of integrity, accountability, transparency, professionalism, team spirit, creativity and quality."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-black p-8 md:p-12 mb-16">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#4ade80,_transparent_70%)]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-green-400">Us</span>
            </h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              Committed to promoting integrity and preventing corruption through innovative strategies and comprehensive solutions.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
              <div className="h-1 w-20 bg-green-500 mt-6 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We combine expertise, innovation, and dedication to deliver comprehensive solutions that promote institutional integrity and combat corruption effectively.
              </p>
              <ul className="space-y-2">
                {['Risk Assessment', 'Strategic Planning', 'Implementation', 'Monitoring'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Projects Completed', value: '100+' },
                  { label: 'Institutions Served', value: '50+' },
                  { label: 'Years Experience', value: '15+' },
                  { label: 'Team Members', value: '20+' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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
};

export default About;