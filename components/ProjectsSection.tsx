'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCode, FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaIndustry, FaDesktop, FaCalculator, FaUniversity, FaSearch, FaShoppingCart, FaUsers, FaChartLine, FaCloud, FaBitcoin, FaShareAlt, FaClipboardList } from 'react-icons/fa'
import { SiReact, SiFlutter, SiLaravel, SiPython, SiTensorflow, SiNextdotjs, SiTailwindcss, SiCplusplus, SiC, SiPhp, SiMysql, SiBootstrap, SiJavascript } from 'react-icons/si'

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
      title: "FG-OS: Advanced Cross-Platform Operating System",
      subtitle: "Modern OS with Linux & Windows Compatibility",
      company: "FGCompany Official - Open Source",
      period: "2024 - Present",
      status: "Active Development",
      description: "Developed FG-OS, a modern, minimalist operating system with professional gradient UI/UX design, featuring cross-platform application compatibility to execute both Linux and Windows applications seamlessly while maintaining superior user experience and security.",
      technologies: ["C/C++", "Assembly x86_64", "Rust", "CMake", "OpenGL", "Linux Kernel", "Windows Compatibility"],
      features: [
        "Cross-platform application compatibility (Linux & Windows)",
        "Modern gradient UI with professional design aesthetics",
        "Advanced security framework and memory management",
        "Custom bootloader and kernel architecture design",
        "Hardware abstraction layer and device drivers framework",
        "Real-time performance optimization and system services"
      ],
      gradient: "from-purple-600 to-blue-600",
      icon: <FaDesktop />,
      type: "Operating System"
    },
    {
      title: "BizCount: Advanced Business Analytics Platform",
      subtitle: "Comprehensive Business Management Solution",
      company: "Business Intelligence & Analytics",
      period: "2024 - Present", 
      status: "Active Development",
      description: "Built BizCount, a comprehensive business analytics and management platform featuring real-time data processing, advanced reporting systems, inventory management, and intelligent business insights using modern web technologies and AI-powered analytics.",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "AI Analytics", "REST API"],
      features: [
        "Real-time business analytics and reporting dashboard",
        "Advanced inventory and resource management system",
        "AI-powered business insights and predictive analytics",
        "Multi-user role management and access control",
        "Automated financial reporting and expense tracking",
        "Integration with multiple business platforms and APIs"
      ],
      gradient: "from-green-600 to-emerald-600",
      icon: <FaCalculator />,
      type: "Business Analytics Platform"
    },
    {
      title: "PSVB Next Application",
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
    },
    {
      title: "InQKA Program Accreditation Information System (PAIS)",
      subtitle: "University Program Accreditation Management",
      company: "InQKA UiTM Shah Alam",
      period: "2021 - 2022",
      status: "Completed",
      description: "Developed a comprehensive web-based accreditation management system for UiTM Shah Alam to streamline program accreditation processes, manage applications, panel assessors, faculties, and generate detailed reports for stakeholders.",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
      features: [
        "Application management with status tracking",
        "Internal and external panel management",
        "Faculty and campus information management",
        "Comprehensive reporting system for stakeholders",
        "Document submission and review workflows",
        "Interactive video tutorial system"
      ],
      gradient: "from-blue-600 to-indigo-600",
      icon: <FaUniversity />,
      type: "Educational Management System"
    },
    {
      title: "InQKA Query Management System", 
      subtitle: "University Query Processing Platform",
      company: "InQKA UiTM Shah Alam",
      period: "2022 - 2023",
      status: "Completed",
      description: "Built a sophisticated query management system for handling university queries and requests, providing efficient tracking, processing, and resolution workflows for academic and administrative inquiries.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX", "PDF Generation"],
      features: [
        "Advanced query categorization and routing",
        "Real-time query status tracking and notifications",
        "Multi-department workflow management",
        "Automated response templates and scheduling",
        "Performance analytics and reporting dashboard",
        "Integration with university authentication systems"
      ],
      gradient: "from-purple-600 to-blue-600",
      icon: <FaSearch />,
      type: "Query Management Platform"
    },
    {
      title: "iProc: Government Procurement Management System",
      subtitle: "Malaysia Government Procurement Platform",
      company: "Jabatan Akauntan Negara Malaysia",
      period: "2023 - 2024",
      status: "Completed",
      description: "Developed iProc, a comprehensive procurement management system specifically for the Procurement Unit, Management Accounting Development Division, Malaysia's National Accountant Department, featuring advanced security and access control.",
      technologies: ["PHP", "MySQL", "Laravel", "Vue.js", "Government APIs", "Security Frameworks"],
      features: [
        "Secure government procurement process management",
        "Advanced role-based access control and authentication",
        "Vendor management and qualification system",
        "Tender and bidding process automation",
        "Compliance tracking and audit trails",
        "Integration with national procurement databases"
      ],
      gradient: "from-red-600 to-orange-600",
      icon: <FaShoppingCart />,
      type: "Government Procurement System"
    },
    {
      title: "KPSU Management System",
      subtitle: "Student Organization Management Platform",
      company: "Student Organization Management",
      period: "2023 - 2024", 
      status: "Completed",
      description: "Built a comprehensive web-based management system for KPSU (Student Organization) using PHP and MySQL to streamline student activities, membership management, and organizational operations.",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: [
        "Student membership registration and management",
        "Event planning and activity scheduling",
        "Financial tracking and budget management",
        "Communication and notification system",
        "Meeting minutes and documentation management",
        "Performance reports and analytics dashboard"
      ],
      gradient: "from-green-600 to-teal-600",
      icon: <FaUsers />,
      type: "Student Management System"
    },
    {
      title: "MySuri: Beauty Salon & Spa Booking System",
      subtitle: "Multi-Platform Beauty Service Platform",
      company: "Beauty & Wellness Industry",
      period: "2024 - Present",
      status: "Active Development",
      description: "Developed MySuri, a comprehensive multi-platform beauty salon and spa booking management system with Laravel backend and Flutter mobile apps, enabling customers to book appointments while providing salon owners with complete business management tools.",
      technologies: ["Laravel", "Flutter", "MySQL", "Stripe", "PayPal", "Firebase", "GPS Integration"],
      features: [
        "Customer booking app with salon discovery and GPS",
        "Salon owner management app with business analytics", 
        "Admin web panel for system management",
        "Multiple payment gateways integration",
        "Real-time chat and notification system",
        "Home service and in-salon booking options"
      ],
      gradient: "from-pink-600 to-purple-600",
      icon: <FaUsers />,
      type: "Beauty & Wellness Platform"
    },
    {
      title: "FGAdmin: Advanced Administrative Dashboard",
      subtitle: "Enterprise Admin Management Platform",
      company: "FGCompany Official",
      period: "2024 - Present",
      status: "Active Development", 
      description: "Created FGAdmin, a powerful administrative dashboard and management platform designed for enterprise-level operations, featuring advanced user management, system monitoring, and comprehensive analytics.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Microservices"],
      features: [
        "Advanced user and role management system",
        "Real-time system monitoring and alerts",
        "Comprehensive analytics and reporting tools",
        "API management and documentation",
        "Security audit logs and compliance tracking",
        "Modular plugin architecture for extensibility"
      ],
      gradient: "from-indigo-600 to-purple-600",
      icon: <FaChartLine />,
      type: "Administrative Platform"
    },
    {
      title: "Weather Web Application",
      subtitle: "Real-Time Weather Information Platform",
      company: "Weather Intelligence",
      period: "2023 - 2024",
      status: "Completed",
      description: "Built a comprehensive weather web application providing real-time weather information, forecasts, and meteorological data with interactive maps and detailed analytics for weather tracking.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather APIs", "Chart.js", "Geolocation"],
      features: [
        "Real-time weather data and forecasts",
        "Interactive weather maps and visualizations",
        "Location-based weather tracking with GPS",
        "Historical weather data and trends analysis",
        "Weather alerts and notification system",
        "Mobile-responsive design for all devices"
      ],
      gradient: "from-cyan-500 to-blue-500",
      icon: <FaCloud />,
      type: "Weather Information System"
    },
    {
      title: "FG-EA Trading Platform v1.0",
      subtitle: "Automated Trading & Investment Platform",
      company: "FGCompany Trading Solutions",
      period: "2024 - Present",
      status: "Active Development",
      description: "Developed FG-EA Trading v1.0, an advanced automated trading platform featuring algorithmic trading strategies, real-time market analysis, and comprehensive portfolio management for forex and cryptocurrency markets.",
      technologies: ["Python", "JavaScript", "Trading APIs", "Machine Learning", "WebSocket", "Chart.js"],
      features: [
        "Automated trading algorithms and expert advisors",
        "Real-time market data analysis and visualization",
        "Risk management and portfolio optimization",
        "Multi-market support (Forex, Crypto, Stocks)",
        "Advanced charting and technical analysis tools",
        "Backtesting and strategy performance analytics"
      ],
      gradient: "from-yellow-500 to-green-500", 
      icon: <FaBitcoin />,
      type: "Trading & Investment Platform"
    },
    {
      title: "FGSocialSphere: Social Media Platform",
      subtitle: "Next-Generation Social Networking Platform",
      company: "FGCompany Social Technologies",
      period: "2024 - Present",
      status: "Active Development",
      description: "Created FGSocialSphere, a modern social media platform with advanced features for content sharing, community building, and social interaction, incorporating AI-powered content curation and engagement analytics.",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "AI/ML", "Cloud Storage"],
      features: [
        "Advanced social networking and community features",
        "AI-powered content recommendation engine",
        "Real-time messaging and video calling",
        "Content creation tools and media sharing",
        "Social analytics and engagement tracking",
        "Privacy controls and security features"
      ],
      gradient: "from-blue-500 to-purple-500",
      icon: <FaShareAlt />,
      type: "Social Media Platform"
    },
    {
      title: "YN Tracker System",
      subtitle: "Advanced Tracking & Monitoring Platform",
      company: "Tracking Solutions",
      period: "2024 - Present", 
      status: "Active Development",
      description: "Developed YN Tracker System, a comprehensive tracking and monitoring platform designed for efficient resource management, real-time tracking, and detailed analytics across various tracking scenarios.",
      technologies: ["PHP", "MySQL", "JavaScript", "GPS Integration", "REST API", "Chart.js"],
      features: [
        "Real-time GPS tracking and location monitoring",
        "Resource allocation and management system",
        "Comprehensive reporting and analytics dashboard",
        "Multi-device compatibility and mobile access",
        "Alert system for critical events and notifications",
        "Historical data analysis and trend tracking"
      ],
      gradient: "from-orange-500 to-red-500",
      icon: <FaClipboardList />,
      type: "Tracking & Monitoring System"
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