'use client'

import { motion } from 'framer-motion'
import { 
  FaCode, FaLaptopCode, FaPalette, FaDatabase, FaCloud, FaBrain,
  FaRocket, FaCog, FaShieldAlt, FaServer, FaMobile, FaDesktop
} from 'react-icons/fa'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython,
  SiJavascript, SiPhp, SiLaravel, SiFlutter, SiAndroid, SiIos, SiMysql,
  SiPostgresql, SiMongodb, SiAmazonaws, SiDocker, SiGit, SiFigma, SiAdobe,
  SiTensorflow, SiPytorch, SiKubernetes, SiJenkins, SiVercel, SiFirebase,
  SiHtml5, SiCss3, SiBootstrap, SiJquery, SiVuedotjs, SiAngular,
  SiExpress, SiSpring, SiDjango, SiFlask, SiKotlin, SiSwift,
  SiSqlite, SiRedis, SiMariadb, SiOracle, SiScikitlearn, SiOpencv, SiNumpy,
  SiPandas, SiKeras, SiJupyter, SiCanva, SiSketch,
  SiGithub, SiGitlab, SiBitbucket
} from 'react-icons/si'

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

export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: <FaRocket />,
      title: "Research & Development (R&D)",
      description: "Innovation-driven research and development of cutting-edge technology solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaDesktop />,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern frameworks and technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaMobile />,
      title: "Full-Stack App Development",
      description: "Cross-platform mobile application development for iOS and Android",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "AI-powered solutions and intelligent systems development",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaPalette />,
      title: "Multimedia Design",
      description: "Creative design solutions for digital media and user interfaces",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "User-centered design creating intuitive and engaging experiences",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Software Testing",
      description: "Comprehensive testing strategies ensuring software quality and reliability",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <FaCloud />,
      title: "Cloud & Version Control",
      description: "Cloud infrastructure management and collaborative development workflows",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <FaServer />,
      title: "RESTful APIs",
      description: "Design and development of scalable and secure API architectures",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const techStack = {
    "Frontend": {
      icon: <SiReact />,
      technologies: [
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vue.js", icon: <SiVuedotjs /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "jQuery", icon: <SiJquery /> }
      ]
    },
    "Backend": {
      icon: <SiNodedotjs />,
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Java", icon: <FaCode /> },
        { name: "Spring Boot", icon: <SiSpring /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "Laravel", icon: <SiLaravel /> }
      ]
    },
    "Mobile": {
      icon: <SiFlutter />,
      technologies: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Flutter Web", icon: <SiFlutter /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "Java", icon: <FaCode /> },
        { name: "Swift", icon: <SiSwift /> },
        { name: "Android", icon: <SiAndroid /> },
        { name: "iOS", icon: <SiIos /> }
      ]
    },
    "Database": {
      icon: <SiMysql />,
      technologies: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "MariaDB", icon: <SiMariadb /> },
        { name: "Oracle DB", icon: <SiOracle /> },
        { name: "Firebase", icon: <SiFirebase /> }
      ]
    },
    "Cloud & DevOps": {
      icon: <SiAmazonaws />,
      technologies: [
        { name: "AWS", icon: <SiAmazonaws /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "GitLab", icon: <SiGitlab /> },
        { name: "Bitbucket", icon: <SiBitbucket /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Jenkins", icon: <SiJenkins /> }
      ]
    },
    "AI/ML": {
      icon: <SiTensorflow />,
      technologies: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "Jupyter", icon: <SiJupyter /> }
      ]
    },
    "Design": {
      icon: <SiFigma />,
      technologies: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Adobe Photoshop", icon: <FaPalette /> },
        { name: "Adobe Illustrator", icon: <FaPalette /> },
        { name: "Adobe Suite", icon: <SiAdobe /> },
        { name: "Canva", icon: <SiCanva /> },
        { name: "Sketch", icon: <SiSketch /> }
      ]
    }
  }

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Areas of Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning multiple domains of technology and innovation
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Stack */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Technical Stack</span>
          </h3>
          <p className="text-lg text-gray-600">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {Object.entries(techStack).map(([category, data], index) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl text-blue-600 mr-3">{data.icon}</div>
                <h4 className="text-lg font-bold text-gray-800">{category}</h4>
              </div>
              <div className="space-y-3 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
                {data.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors cursor-default group"
                  >
                    <div className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">{tech.icon}</div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 