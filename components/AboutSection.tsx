'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLanguage, FaUser } from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get to know more about my background, skills, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  <FaUser />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Personal Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="text-blue-500 mr-3" />
                  <span>Kuala Langat, Selangor, Malaysia</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaEnvelope className="text-blue-500 mr-3" />
                  <a href="mailto:faizhiruko00@gmail.com" className="hover:text-blue-600 transition-colors">
                    faizhiruko00@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaPhone className="text-blue-500 mr-3" />
                  <a href="tel:+60194596236" className="hover:text-blue-600 transition-colors">
                    +60-19 459 6236
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaLanguage className="text-blue-500 mr-3" />
                  <span>English, Malay, Mandarin (Write only)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Full-Stack Developer with a Passion for Innovation
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am a dedicated Full-Stack Web and App Developer with a strong foundation in computer science 
                and information technology. My experience spans across data science, machine learning, software 
                testing, multimedia design, and IT support.
              </p>
              
              <p>
                I focus on developing scalable, efficient, and user-centered solutions across web and mobile 
                platforms, with a commitment to quality, reliability, and innovation. My approach combines 
                technical expertise with creative problem-solving to deliver exceptional results.
              </p>
              
              <p>
                Currently pursuing my Master of Science in Information Technology (Research Mode) while 
                working on cutting-edge projects in fintech, agriculture technology, and business automation systems.
              </p>
              
              <p className="font-semibold text-blue-600">
                Recent Achievement: Best Employee of the Year (2024) - Recognized for consistently exceeding 
                performance expectations and contributing to significant business improvements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                'Problem Solving', 'Team Collaboration', 'Innovation', 'Quality Focused',
                'User-Centered Design', 'Continuous Learning', 'Agile Development'
              ].map((trait, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 