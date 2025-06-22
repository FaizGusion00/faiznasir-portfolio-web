'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaBook, FaSearch, FaClock, FaAward, FaStar, FaMedal, FaTrophy } from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 }
}

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
}

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Information Technology (Research Mode)",
      specialization: "Part Time",
      institution: "Universiti Teknologi Mara",
      period: "November 2023 - Present",
      status: "In Progress",
      description: "Advanced research-focused program in Information Technology, exploring cutting-edge developments in the field.",
      researchTitle: "Risk Model of Digital Customer Engagement in Rental Collaborative Consumption Platform",
      highlights: [
        "Research-focused advanced degree program",
        "Digital customer engagement and risk modeling",
        "Collaborative consumption platform analysis",
        "Industry-relevant research methodology"
      ],
      gradient: "from-purple-600 to-pink-600",
      icon: <FaSearch />
    },
    {
      degree: "Bachelor of Information System in Business Computing",
      specialization: "Business Computing",
      institution: "Universiti Teknologi Mara (UiTM Shah Alam)",
      period: "April 2021 - August 2023",
      status: "Completed",
      description: "Comprehensive program combining information systems with business applications and computing technologies.",
      projectTitle: "The Development of Peer-to-Peer Automobile Rental System",
      highlights: [
        "Business-oriented computing and information systems",
        "Peer-to-peer system development and implementation",
        "Integration of business processes with technology",
        "Modern software development methodologies"
      ],
      gradient: "from-blue-600 to-cyan-600",
      icon: <FaBook />
    },
    {
      degree: "Diploma in Science Computer in Mathematics",
      specialization: "Computer Mathematics",
      institution: "Universiti Teknologi Mara (UiTM Kampus Kuala Terengganu)",
      period: "October 2018 - December 2020",
      status: "Completed",
      description: "Foundational program in computer science with strong mathematical background, providing solid technical fundamentals.",
      highlights: [
        "Strong foundation in computer science principles",
        "Mathematical modeling and computational thinking",
        "Programming and software development fundamentals",
        "Problem-solving and analytical skills development"
      ],
      gradient: "from-green-600 to-teal-600",
      icon: <FaGraduationCap />
    }
  ]

  const academicAchievements = [
    {
      title: "Research Excellence",
      description: "Currently conducting advanced research in digital customer engagement with innovative methodologies",
      icon: <FaSearch />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Project Innovation",
      description: "Developed innovative automobile rental system with cutting-edge features and user experience",
      icon: <FaTrophy />,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      title: "Academic Progression",
      description: "Consistent advancement from Diploma to Master's level with distinction and honors",
      icon: <FaMedal />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      title: "Practical Excellence",
      description: "Successfully bridging academic knowledge with real-world applications and industry solutions",
      icon: <FaAward />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-200/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.div variants={scaleIn} className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20 mb-6">
            <FaGraduationCap className="text-blue-600 text-xl" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Academic Journey</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Education &amp; Academic Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A continuous learning journey from foundational computer science principles to advanced research in information technology, 
            marked by academic excellence and practical innovation.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-600 hidden lg:block rounded-full shadow-lg"></div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12 lg:space-y-16 mb-20"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-500 shadow-lg z-10">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
                
                {/* Education Card */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}
                >
                  <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-blue-200">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {edu.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            edu.status === 'Completed' 
                              ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                              : 'bg-blue-100 text-blue-700 border border-blue-200'
                          }`}>
                            {edu.status}
                          </span>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <FaCalendarAlt />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight mb-2">
                          {edu.degree}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaUniversity className="text-blue-600" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                      {edu.description}
                    </p>

                    {/* Project/Research Title */}
                    {(edu.projectTitle || edu.researchTitle) && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200/50 mb-6"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            {edu.researchTitle ? <FaSearch className="text-white text-sm" /> : <FaBook className="text-white text-sm" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2 text-sm">
                              {edu.researchTitle ? '🔬 Research Dissertation' : '📚 Final Year Project'}
                            </h4>
                            <p className="text-blue-700 font-semibold italic text-sm leading-relaxed">
                              "{edu.researchTitle || edu.projectTitle}"
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Key Learning Areas */}
                    <div>
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        Key Learning Areas
                      </h4>
                      <div className="grid gap-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.div 
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: highlightIndex * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700 font-medium leading-relaxed">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.div variants={scaleIn} className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20 mb-6">
              <FaTrophy className="text-amber-600 text-xl" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Achievements</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Academic Excellence &amp; Recognition
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Milestones and recognitions that mark my academic journey and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {academicAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group bg-gradient-to-br ${achievement.bgColor} rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-white/80`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-gray-800 transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="mt-6 flex justify-end">
                  <div className={`w-20 h-1 bg-gradient-to-r ${achievement.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Educational Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full transform -translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <FaGraduationCap className="text-white text-3xl" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Continuous Learning Philosophy
              </h3>
              
              <p className="text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8 text-lg">
                My educational journey reflects a deep commitment to continuous learning and practical innovation. 
                From foundational computer science principles to advanced research in information technology, 
                I believe in bridging theoretical knowledge with real-world applications to create meaningful, 
                impactful solutions that drive technological advancement.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  { label: 'Research-Driven', icon: '🔬' },
                  { label: 'Practical Application', icon: '⚡' },
                  { label: 'Continuous Learning', icon: '📚' },
                  { label: 'Innovation Focus', icon: '💡' },
                  { label: 'Industry Relevance', icon: '🏭' },
                  { label: 'Academic Excellence', icon: '🏆' }
                ].map((trait, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{trait.icon}</div>
                    <span className="text-white font-semibold text-sm">
                      {trait.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-blue-200 text-sm italic"
              >
                "Education is not the filling of a pail, but the lighting of a fire." - W.B. Yeats
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 