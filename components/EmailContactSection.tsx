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
      subtitle: "Professional Inquiries & General Contact",
      email: "faizhiruko00@gmail.com",
      description: "For project discussions, collaboration opportunities, and all professional inquiries. Your primary contact point for any development needs.",
      gradient: "from-blue-600 to-indigo-600",
      delay: 0,
      features: ["⚡ 24-hour response time", "📋 Detailed project proposals", "💼 Professional consultation", "🔒 Confidential discussions"]
    },
    {
      icon: <FaRocket />,
      title: "Project Collaboration",
      subtitle: "Let's Build Something Amazing",
      email: "faizhiruko00@gmail.com",
      description: "Ready to start your next big project? Let's discuss your vision, requirements, and turn your ideas into reality with cutting-edge solutions.",
      gradient: "from-purple-600 to-pink-600",
      delay: 0.2,
      features: ["🚀 Custom solutions", "⚙️ Agile development", "✅ Quality assurance", "📈 Scalable architecture"]
    },
    {
      icon: <FaPhoneAlt />,
      title: "Quick Consultation",
      subtitle: "Free Expert Advice & Technical Guidance",
      email: "fgcompany.developer@gmail.com",
      description: "Book a free 30-minute consultation to discuss your project requirements, get technical guidance, and explore the best solutions for your needs.",
      gradient: "from-emerald-600 to-teal-600",
      delay: 0.4,
      features: ["🆓 Free consultation", "🎯 Technical guidance", "📊 Project roadmap", "💡 Innovation insights"]
    }
  ]

  const quickStats = [
    { number: "50+", label: "Projects Completed", icon: <FaCheckCircle /> },
    { number: "24h", label: "Average Response Time", icon: <FaClock /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaStar /> },
    { number: "5+", label: "Years Experience", icon: <FaGlobe /> }
  ]

  const handleEmailClick = (email: string, title: string) => {
    let subject = "";
    let body = "";
    
    if (title === "Direct Email") {
      subject = "Professional Inquiry - Let's Discuss Your Project";
      body = "Hello Faiz,%0D%0A%0D%0AI hope this email finds you well. I'm reaching out regarding a potential project collaboration.%0D%0A%0D%0AProject Details:%0D%0A• Project Type: %0D%0A• Industry/Domain: %0D%0A• Budget Range: %0D%0A• Timeline: %0D%0A• Specific Requirements: %0D%0A%0D%0APlease let me know your availability for a detailed discussion.%0D%0A%0D%0ALooking forward to your response!%0D%0A%0D%0ABest regards,";
    } else if (title === "Project Collaboration") {
      subject = "Project Collaboration Opportunity - Let's Build Together";
      body = "Hello Faiz,%0D%0A%0D%0AI have an exciting project idea and would love to collaborate with you!%0D%0A%0D%0AProject Vision:%0D%0A• Project Name: %0D%0A• Technology Stack Preference: %0D%0A• Target Audience: %0D%0A• Key Features Required: %0D%0A• Expected Launch Date: %0D%0A%0D%0AI believe your expertise would be perfect for this project. Would you be interested in discussing this further?%0D%0A%0D%0AExcited to hear from you!%0D%0A%0D%0ABest regards,";
    } else if (title === "Quick Consultation") {
      subject = "Free Consultation Request - Technical Guidance Needed";
      body = "Hello Faiz,%0D%0A%0D%0AI would like to schedule a free 30-minute consultation to discuss my project requirements and get your expert technical guidance.%0D%0A%0D%0AConsultation Topics:%0D%0A• Project Overview: %0D%0A• Technical Challenges: %0D%0A• Technology Recommendations: %0D%0A• Project Roadmap & Timeline: %0D%0A• Budget Planning: %0D%0A%0D%0APreferred Time Slots:%0D%0A• Option 1: %0D%0A• Option 2: %0D%0A• Option 3: %0D%0A%0D%0AThank you for offering free consultations. Looking forward to our discussion!%0D%0A%0D%0ABest regards,";
    }
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 4000);
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
              onClick={() => handleEmailClick(option.email, option.title)}
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
                <div className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0.8,
                        x: hoveredCard === index ? 0 : -20
                      }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 rounded-lg p-2 group-hover:bg-white transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${option.gradient} flex-shrink-0`} />
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Email Address */}
                <div className="bg-white rounded-lg p-4 mb-6 border-2 border-gray-200 group-hover:border-blue-300 transition-all duration-300 shadow-sm">
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <FaEnvelope className="text-blue-600" />
                    <span className="font-semibold">Contact Email</span>
                  </div>
                  <div className="font-mono text-gray-900 font-bold text-base break-all select-all cursor-pointer hover:text-blue-700 transition-colors bg-gray-50 p-2 rounded border">
                    {option.email}
                  </div>
                  <div className="text-xs text-gray-600 mt-2 font-medium">Click button below to send email directly</div>
                </div>

                {/* Action Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${option.gradient} rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group/btn`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"
                  />
                  <FaEnvelope className="relative z-10 text-lg" />
                  <span className="relative z-10">Email Me Now</span>
                  <motion.div
                    animate={{ x: hoveredCard === index ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.div>
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


      </div>
    </section>
  )
} 