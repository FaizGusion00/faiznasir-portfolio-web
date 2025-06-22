'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  FaEnvelope, FaPaperPlane, FaRocket, FaClock, FaCheckCircle, 
  FaPhoneAlt, FaCalendarAlt, FaGlobe, FaArrowRight, FaStar
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

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const floatingEmail = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function EmailContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [emailSent, setEmailSent] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start("animate")
  }, [controls])

  const contactOptions = [
    {
      icon: <FaEnvelope />,
      title: "Direct Email",
      subtitle: "Professional Inquiries",
      email: "faizhiruko00@gmail.com",
      description: "For project discussions, collaboration opportunities, and professional inquiries",
      gradient: "from-blue-600 to-cyan-600",
      delay: 0,
      features: ["24-hour response time", "Detailed project proposals", "Professional consultation"]
    },
    {
      icon: <FaRocket />,
      title: "Project Collaboration",
      subtitle: "Let's Build Together",
      email: "projects@faiznasir.dev",
      description: "Ready to start your next big project? Let's discuss your vision and make it reality",
      gradient: "from-purple-600 to-pink-600",
      delay: 0.2,
      features: ["Custom solutions", "Agile development", "Quality assurance"]
    },
    {
      icon: <FaPhoneAlt />,
      title: "Quick Consultation",
      subtitle: "Schedule a Call",
      email: "consultation@faiznasir.dev",
      description: "Book a free 30-minute consultation to discuss your project requirements",
      gradient: "from-green-600 to-teal-600",
      delay: 0.4,
      features: ["Free consultation", "Technical guidance", "Project roadmap"]
    }
  ]

  const quickStats = [
    { number: "50+", label: "Projects Completed", icon: <FaCheckCircle /> },
    { number: "24h", label: "Average Response Time", icon: <FaClock /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaStar /> },
    { number: "5+", label: "Years Experience", icon: <FaGlobe /> }
  ]

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}?subject=Project Inquiry&body=Hello Faiz,%0D%0A%0D%0AI'm interested in discussing a project with you. Here are the details:%0D%0A%0D%0AProject Type: %0D%0ABudget Range: %0D%0ATimeline: %0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards,`
    setEmailSent(true)
    setTimeout(() => setEmailSent(false), 3000)
  }

  return (
    <section id="email-contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={floatingEmail.animate}
          className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 flex items-center justify-center text-blue-500 text-2xl"
        >
          <FaEnvelope />
        </motion.div>
        <motion.div 
          animate={{
            ...floatingEmail.animate,
            transition: { ...floatingEmail.animate.transition, delay: 1 }
          }}
          className="absolute top-40 right-20 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 flex items-center justify-center text-purple-500 text-xl"
        >
          <FaPaperPlane />
        </motion.div>
        <motion.div 
          animate={{
            ...floatingEmail.animate,
            transition: { ...floatingEmail.animate.transition, delay: 2 }
          }}
          className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-green-400/20 to-teal-400/20 flex items-center justify-center text-green-500 text-2xl"
        >
          <FaRocket />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={pulseAnimation.animate}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg"
          >
            <FaEnvelope />
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Let's Start a Conversation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Choose the best way to reach out and let's create something amazing together.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl text-blue-600 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: option.delay }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer"
              onClick={() => handleEmailClick(option.email)}
            >
              {/* Gradient Background on Hover */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: hoveredCard === index ? 1 : 0,
                  opacity: hoveredCard === index ? 0.1 : 0
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-r ${option.gradient} rounded-2xl`}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: hoveredCard === index ? 1.1 : 1,
                    rotate: hoveredCard === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.gradient} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
                >
                  {option.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {option.title}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{option.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0.7,
                        x: hoveredCard === index ? 0 : -20
                      }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Email Address */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 group-hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <FaEnvelope className="text-blue-500" />
                    <span>Email Address</span>
                  </div>
                  <div className="font-mono text-blue-700 font-medium">{option.email}</div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${option.gradient} rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <span>Send Email</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: emailSent ? 1 : 0,
            scale: emailSent ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50"
        >
          <FaCheckCircle />
          <span>Email client opened! Check your default email app.</span>
        </motion.div>

        {/* Additional Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Prefer a Different Communication Method?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm flexible and available through multiple channels to make communication as convenient as possible for you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+60194596236"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaPhoneAlt />
                Call Now
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/faiznasir"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaCalendarAlt />
                LinkedIn Message
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 