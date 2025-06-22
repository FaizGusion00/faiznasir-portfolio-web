'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, 
  FaPaperPlane, FaUser, FaComment, FaRocket, FaDownload 
} from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with EmailJS or your backend here
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "faizhiruko00@gmail.com",
      link: "mailto:faizhiruko00@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+60-19 459 6236",
      link: "tel:+60194596236",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Kuala Langat, Selangor, Malaysia",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/faiznasir",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaGithub />,
      name: "GitHub", 
      link: "https://github.com/faiznasir",
      color: "hover:text-gray-800"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-pink-400/20 to-red-500/20 animate-blob animation-delay-4000" />
        <div className="absolute top-40 left-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 animate-blob" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="pt-6 border-t border-white/20">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div variants={fadeInUp} className="pt-6">
              <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaDownload />
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center gap-4 text-yellow-400 mb-4">
              <FaRocket className="text-2xl" />
              <span className="text-lg font-semibold">Ready to Start Your Project?</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's turn your vision into reality. Whether it's a web application, mobile app, or innovative tech solution, 
              I'm here to help you achieve your goals with cutting-edge technology and professional expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:faizhiruko00@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start a Conversation
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 pt-8 border-t border-white/20 text-center"
      >
        <p className="text-gray-400">
          © {new Date().getFullYear()} Muhammad Faiz Bin Nasir. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
        </p>
      </motion.div>
    </section>
  )
} 