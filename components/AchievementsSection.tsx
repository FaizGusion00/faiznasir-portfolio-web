'use client'

import { motion } from 'framer-motion'
import { FaAward, FaTrophy, FaCertificate, FaMedal, FaStar, FaBalanceScale, FaRocket, FaUsers } from 'react-icons/fa'

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

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Best Employee of the Year (2024)",
      description: "Recognized for consistently exceeding performance expectations, demonstrating exceptional problem-solving skills, and contributing to significant business improvements.",
      year: "2024",
      type: "Performance Award",
      gradient: "from-yellow-500 to-orange-500",
      highlights: [
        "Exceptional performance across multiple client projects",
        "Significant contribution to business process improvements",
        "Outstanding problem-solving and innovation"
      ]
    },
    {
      icon: <FaBalanceScale />,
      title: "Work-Life Balance Achievement",
      description: "Successfully managed part-time freelance work while balancing postgraduate studies, maintaining consistent performance across multiple client projects and working without compromising quality or deadlines.",
      year: "2023-2024",
      type: "Professional Excellence",
      gradient: "from-green-500 to-teal-500",
      highlights: [
        "Maintained quality standards across all projects",
        "Successfully balanced multiple commitments",
        "Zero compromise on project deadlines"
      ]
    }
  ]

  const certifications = [
    {
      name: "JELA Certification",
      issuer: "Professional Development",
      type: "Technical Certification"
    },
    {
      name: "MUET B5",
      issuer: "Malaysian University English Test",
      type: "Language Proficiency"
    },
    {
      name: "AWS Developer Diploma Certificate (Advanced)",
      issuer: "Amazon Web Services",
      type: "Cloud Computing"
    },
    {
      name: "Bootstrap 5 Udemy Course Certificate",
      issuer: "Udemy",
      type: "Frontend Development"
    },
    {
      name: "Java Full-Stack Developer Diploma Certificate",
      issuer: "Professional Training",
      type: "Full-Stack Development"
    },
    {
      name: "PHP & HTML Full-Stack Developer Diploma Certificate",
      issuer: "Professional Training",
      type: "Web Development"
    },
    {
      name: "Python Official Certificate",
      issuer: "Python Software Foundation",
      type: "Programming Language"
    },
    {
      name: "Google Ads Test Certificate",
      issuer: "Google",
      type: "Digital Marketing"
    },
    {
      name: "Advanced Computer Fundamental Certificate",
      issuer: "Technology Institute",
      type: "Computer Science"
    },
    {
      name: "Mock TCS NQT Advance",
      issuer: "Tata Consultancy Services",
      type: "Technical Assessment"
    }
  ]

  const additionalAwards = [
    {
      title: "Overall Best Employee (2024)",
      organization: "CloudGarden Sdn Bhd",
      description: "Company-wide recognition for outstanding contributions"
    },
    {
      title: "Student Representative Council (2019)",
      organization: "Universiti Teknologi Mara",
      description: "Leadership role representing student body interests"
    },
    {
      title: "Terengganu IT Tournament - Third Place (2023)",
      organization: "State Technology Competition",
      description: "Regional competition recognition"
    },
    {
      title: "Best Intern (2023)",
      organization: "Industrial Training",
      description: "Excellence in internship performance"
    },
    {
      title: "Best UI/UX Design (FUSION 2024)",
      organization: "Design Competition",
      description: "Top recognition in design competition"
    },
    {
      title: "StudySection cert top-scorer",
      organization: "StudySection",
      description: "Top performance in technical assessments"
    },
    {
      title: "Most Promising Developer (Magiska, 2025)",
      organization: "Magiska",
      description: "Recognition for development potential and skills"
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Achievements & Recognition</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional accomplishments, certifications, and recognition for excellence in technology and innovation
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center text-white text-2xl mb-6 mx-auto animate-glow`}>
                {achievement.icon}
              </div>
              
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {achievement.type}
                  </span>
                  <span className="text-sm text-gray-500">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{achievement.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm">Key Highlights:</h4>
                {achievement.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-2">
                    <FaStar className="text-yellow-500 mt-1 flex-shrink-0 text-xs" />
                    <span className="text-sm text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Professional Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <FaCertificate className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">{cert.name}</h4>
                    <p className="text-gray-600 text-xs mb-2">{cert.issuer}</p>
                    <span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {cert.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Awards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Awards & Activities</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalAwards.map((award, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-start gap-3">
                  <FaMedal className="text-orange-500 text-lg mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{award.title}</h4>
                    <p className="text-blue-600 text-sm mb-2">{award.organization}</p>
                    <p className="text-gray-600 text-sm">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center gap-4 text-blue-600 mb-4">
              <FaUsers className="text-2xl" />
              <span className="text-lg font-semibold">Ready for New Challenges</span>
            </div>
            <p className="text-gray-600 mb-6">
              Continuously striving for excellence and looking forward to contributing to innovative projects
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <FaRocket />
              Let's Collaborate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 