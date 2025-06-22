'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload,
  FaCode, FaLaptopCode, FaPalette, FaDatabase, FaCloud, FaBrain,
  FaAward, FaGraduationCap, FaRocket, FaBriefcase, FaCertificate
} from 'react-icons/fa'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython,
  SiJavascript, SiPhp, SiLaravel, SiFlutter, SiAndroid, SiIos, SiMysql,
  SiPostgresql, SiMongodb, SiAmazonaws, SiDocker, SiGit, SiFigma, SiAdobe
} from 'react-icons/si'

// Import all section components
import AboutSection from '@/components/AboutSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import ProjectsSection from '@/components/ProjectsSection'
import AchievementsSection from '@/components/AchievementsSection'
import EducationSection from '@/components/EducationSection'
import GitSection from '@/components/GitSection'
import ReferralSection from '@/components/ReferralSection'
import EmailContactSection from '@/components/EmailContactSection'
import ContactSection from '@/components/ContactSection'

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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Add function to handle resume download for mobile
  const handleResumeDownload = () => {
    // Create a temporary link element for download
    const link = document.createElement('a')
    link.href = '/assets/resume.pdf'
    link.download = 'Muhammad_Faiz_Nasir_Resume.pdf'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    
    // Trigger the download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Close mobile menu if open
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'expertise', 'projects', 'achievements', 'education', 'github', 'referrals', 'email-contact', 'contact']
      const scrollPos = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            {/* Logo/Brand */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 lg:space-x-3"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">FN</span>
              </div>
              <div className="hidden xs:block">
                <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-800">
                  Faiz Nasir
                </h1>
                <p className="text-xs text-gray-500 font-medium hidden sm:block">Full-Stack Developer</p>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 bg-gray-50 rounded-2xl p-1.5 shadow-inner border border-gray-200">
              {[
                { id: 'hero', label: 'Home', icon: '🏠' },
                { id: 'about', label: 'About', icon: '👨‍💻' },
                { id: 'expertise', label: 'Skills', icon: '⚡' },
                { id: 'projects', label: 'Projects', icon: '🚀' },
                { id: 'achievements', label: 'Awards', icon: '🏆' },
                { id: 'education', label: 'Education', icon: '🎓' },
                { id: 'github', label: 'GitHub', icon: '💻' },
                { id: 'contact', label: 'Contact', icon: '📬' }
              ].map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span className="flex items-center gap-1.5 lg:gap-2">
                    <span className="text-xs">{item.icon}</span>
                    <span className="hidden xl:inline">{item.label}</span>
                    <span className="xl:hidden">{item.label.split(' ')[0]}</span>
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl -z-10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              {/* Resume Download Button - Desktop */}
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-1.5 lg:gap-2 px-2 sm:px-3 lg:px-4 py-2 lg:py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaDownload className="text-xs lg:text-sm" />
                <span className="text-xs lg:text-sm">Resume</span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-800 hover:bg-gray-200 transition-all duration-300 border border-gray-200 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 mx-2 mt-1 rounded-2xl overflow-hidden"
            >
              <div className="p-4">
                {/* Mobile Navigation Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { id: 'hero', label: 'Home', icon: '🏠' },
                    { id: 'about', label: 'About', icon: '👨‍💻' },
                    { id: 'expertise', label: 'Skills', icon: '⚡' },
                    { id: 'projects', label: 'Projects', icon: '🚀' },
                    { id: 'achievements', label: 'Awards', icon: '🏆' },
                    { id: 'education', label: 'Education', icon: '🎓' },
                    { id: 'github', label: 'GitHub', icon: '💻' },
                    { id: 'contact', label: 'Contact', icon: '📬' }
                  ].map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex flex-col items-center p-3 rounded-xl text-center transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-800 border border-gray-200'
                      }`}
                    >
                      <span className="text-xl mb-1">{item.icon}</span>
                      <span className="text-xs font-semibold">{item.label}</span>
                    </motion.a>
                  ))}
                </div>
                
                {/* Mobile Resume Download */}
                <motion.button
                  onClick={handleResumeDownload}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full p-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaDownload className="text-sm" />
                  <span className="text-sm">Download Resume</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-14 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-glow">
                <img 
                  src="/assets/profile.png" 
                  alt="Muhammad Faiz Nasir - Professional Profile"
                  className="w-full h-full rounded-full object-cover bg-gray-200"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600" style={{display: 'none'}}>
                  FN
                </div>
              </div>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gray-800">Hi, I'm </span>
              <span className="gradient-text">Muhammad Faiz</span>
            </motion.h1>

            <motion.h2 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Full-Stack Web/App Developer • Software Engineer • Graphics Designer • UI/UX Designer • IT Specialist
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Passionate about creating scalable, efficient, and user-centered solutions across web and mobile platforms, 
              with a commitment to quality, reliability, and innovation.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 pulse-effect"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex justify-center space-x-6"
            >
              <a href="mailto:faizhiruko00@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                <FaEnvelope />
              </a>
              <a href="https://linkedin.com/in/faiznasir" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/FaizGusion00" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                <FaGithub />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Git Section */}
      <GitSection />

      {/* Referral Section */}
      <ReferralSection />

      {/* Email Contact Section */}
      <EmailContactSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
} 