import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div className="bg-green-100 min-h-screen">
        <Navbar/>
        <div>
            <div className="text-center mt-10 mb-6 font-black text-3xl">
                <h1>About Us</h1>
                
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="p-10 mt-2 mb-8 bg-white rounded-xl shadow-md w-96">
                    <h1 className="font-black text-2xl">Vision</h1>
                    <p>To be a leading institution in the development and promotion of economical and comprehensive corruption prevention strategies to enhance integrity, prudent management of resources, risk management and effective service delivery in the region. </p>
                </div>
                <div className="p-10 bg-white mb-8 rounded-xl shadow-md w-96">
                    <h1 className="font-black text-2xl">Mission.</h1>
                    <p>To enhance prudent management and improve service delivery by promoting integrity and corruption free institutions through conducting of corruption risk assessments, development of governance instruments, best practice guidelines, risk management tools, training, empowerment, monitoring and evaluation and research.</p>
                </div>
                <div  className="p-10 bg-white rounded-xl shadow-md w-96">
                    <h1 className="font-black text-2xl">Core Values</h1>
                    <p>To foster its vision, mission and objectives, CIMC is guided by strong core values of integrity, accountability, transparency, professionalism, team spirit, creativity and quality.</p>
                </div>
               
            </div>
        </div>
        <Footer />
    </div>
    
  )
}

export default About