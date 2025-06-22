'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCode, FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaIndustry } from 'react-icons/fa'
import { SiReact, SiFlutter, SiLaravel, SiPython, SiTensorflow, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "PSBV Next Application",
      subtitle: "Phongsavanh Bank HR System",
      company: "International Project - Laos",
      period: "October 2024 - April 2025",
      status: "In Progress",
      description: "Leading the design and development of the PSBV Next HR System for Phongsavanh Bank, streamlining employee management processes and automating HR workflows using Flutter for app and Laravel for web.",
      technologies: ["Flutter", "Laravel", "REST API", "MySQL", "HR Management"],
      features: [
        "Employee management and records system",
        "Attendance tracking and leave management", 
        "Cross-functional team integration",
        "Operational efficiency improvements"
      ],
      gradient: "from-blue-600 to-purple-600",
      icon: <SiFlutter />,
      type: "Enterprise Application"
    },
    {
      title: "Multi-Role Shirt Printing Work Order Management System",
      subtitle: "BizzPrint Malaysia",
      company: "Business Automation",
      period: "May 2025 - Present",
      status: "Active Development",
      description: "Developed a comprehensive multi-user work order system using Laravel (backend) and Next.js (frontend) to support real-time job tracking for clients, sales managers, and production staff.",
      technologies: ["Laravel", "Next.js", "MySQL", "REST API", "Real-time Tracking"],
      features: [
        "Multi-role user system with dynamic portals",
        "Real-time job progress tracking and notifications",
        "QR code integration for physical job tracking",
        "Email notifications and live status updates"
      ],
      gradient: "from-green-600 to-teal-600",
      icon: <SiLaravel />,
      type: "Business Management System"
    },
    {
      title: "MetaTravel.ai Cryptocurrency System",
      subtitle: "Singapore",
      company: "Fintech Innovation",
      period: "March 2025 - Present",
      status: "In Development",
      description: "Developed and integrated MetaTravel.ai's cryptocurrency investment system using Laravel (SMTP backend), Next.js + Tailwind CSS (web frontend), and Flutter (mobile app) with REST API communication.",
      technologies: ["Laravel", "Next.js", "Flutter", "Tailwind CSS", "Cryptocurrency", "REST API"],
      features: [
        "Cryptocurrency investment platform integration",
        "Real-time investment tracking and portfolio management",
        "Cross-platform compatibility (Web + Mobile)",
        "Secure transaction processing and user management"
      ],
      gradient: "from-yellow-500 to-orange-600",
      icon: <SiNextdotjs />,
      type: "Fintech Platform"
    },
    {
      title: "Automatic AI Paddy Drying System",
      subtitle: "MARDI Parit, Perak",
      company: "Agriculture Technology",
      period: "September 2023 - May 2024",
      status: "Completed",
      description: "Integrated IoT sensors and monitoring tools to track humidity and temperature levels in real-time, ensuring consistent and high-quality drying results using Ionic, leveraging AWS IoT services.",
      technologies: ["IoT", "AWS IoT", "Ionic", "Real-time Monitoring", "Machine Learning"],
      features: [
        "Real-time humidity and temperature monitoring",
        "Automated drying system control and optimization",
        "IoT sensor integration with cloud connectivity",
        "Quality assurance through intelligent monitoring"
      ],
      gradient: "from-emerald-500 to-green-600",
      icon: <FaIndustry />,
      type: "IoT & Agriculture"
    },
    {
      title: "Dog Breed Recognition System",
      subtitle: "TAQWA Veterinarian Clinic",
      company: "AI & Computer Vision",
      period: "November 2023 - January 2024",
      status: "Completed", 
      description: "Built a dog breed recognition system using Python and TensorFlow Java API to deliver real-time breed predictions from user-uploaded images, with Java (Gradle) desktop app integration.",
      technologies: ["Python", "TensorFlow", "Java", "Computer Vision", "Machine Learning"],
      features: [
        "Real-time dog breed classification and identification",
        "Desktop application with intuitive user interface",
        "High-accuracy machine learning model integration",
        "Image processing and classification pipeline"
      ],
      gradient: "from-purple-500 to-pink-600",
      icon: <SiTensorflow />,
      type: "AI & Machine Learning"
    },
    {
      title: "Smart E-Commerce Platform",
      subtitle: "Modern Shopping Experience",
      company: "SmartShopper",
      period: "January 2024 - March 2024",
      status: "Completed",
      description: "Built a comprehensive e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless payment integration using React.js and Node.js.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "AI Recommendations"],
      features: [
        "AI-powered product recommendations engine",
        "Real-time inventory and order management",
        "Multi-payment gateway integration",
        "Advanced search and filtering system"
      ],
      gradient: "from-cyan-500 to-blue-600",
      icon: <SiReact />,
      type: "E-Commerce Platform"
    },
    {
      title: "Healthcare Management System",
      subtitle: "Digital Health Solutions",
      company: "TOBIB Healthcare Banting",
      period: "June 2024 - August 2024",
      status: "Completed",
      description: "Developed a comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities using Laravel and Vue.js.",
      technologies: ["Laravel", "Vue.js", "MySQL", "WebRTC", "Chart.js"],
      features: [
        "Electronic health records management",
        "Telemedicine video consultation platform",
        "Automated appointment scheduling system",
        "Real-time health analytics dashboard"
      ],
      gradient: "from-red-500 to-pink-600",
      icon: <SiLaravel />,
      type: "Healthcare System"
    },
    {
      title: "Real Estate Analytics Platform",
      subtitle: "Property Investment Intelligence",
      company: "PropTech Innovation",
      period: "April 2024 - June 2024",
      status: "Completed",
      description: "Created an advanced real estate analytics platform with market predictions, property valuation algorithms, and investment ROI calculators using Python and React.",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "D3.js"],
      features: [
        "AI-powered property valuation models",
        "Market trend analysis and predictions",
        "Investment ROI calculation tools",
        "Interactive data visualization dashboard"
      ],
      gradient: "from-indigo-500 to-purple-600",
      icon: <SiPython />,
      type: "Analytics Platform"
    },
    {
      title: "Social Media Management Dashboard",
      subtitle: "Multi-Platform Content Manager",
      company: "Pitchdeck.my",
      period: "February 2024 - April 2024",
      status: "Completed",
      description: "Built a comprehensive social media management platform with automated posting, analytics tracking, and content scheduling across multiple platforms using Next.js and TypeScript.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Social APIs", "Chart.js"],
      features: [
        "Multi-platform content scheduling and posting",
        "Real-time social media analytics tracking",
        "Automated hashtag and content suggestions",
        "Team collaboration and approval workflows"
      ],
      gradient: "from-pink-500 to-rose-600",
      icon: <SiNextdotjs />,
      type: "Social Media Platform"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing recent professional project experiences and innovative solutions across various industries
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white text-lg`}>
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-lg text-gray-600 font-medium">{project.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt />
                          {project.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt />
                          {project.period}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : project.status === 'In Progress' || project.status === 'Active Development' || project.status === 'In Development'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-sm bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 rounded-full text-blue-700 font-medium">
                      {project.type}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features & Achievements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies & Actions */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-800 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <span className="text-sm text-gray-500 italic">
                        Professional project delivered with excellence
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Want to see more of my work or discuss a potential project?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <FaRocket />
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  )
} 