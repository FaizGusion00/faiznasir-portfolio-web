'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaCode, FaEye, FaLock, FaBuilding } from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

export default function GitSection() {
  return (
    <section id="github" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              My Code Repository
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my public repositories and coding contributions on GitHub
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <FaGithub />
              </div>
              <h3 className="text-2xl font-bold mb-4">Muhammad Faiz Nasir</h3>
              <p className="text-gray-300 mb-6">
                Full-Stack Developer • Software Engineer • Open Source Contributor
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <FaCode className="text-blue-400 text-2xl mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Public Repositories</h4>
                <p className="text-gray-400 text-sm">Open source projects & demos</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <FaEye className="text-green-400 text-2xl mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Transparency</h4>
                <p className="text-gray-400 text-sm">Code quality & best practices</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <FaBuilding className="text-purple-400 text-2xl mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Professional Work</h4>
                <p className="text-gray-400 text-sm">Portfolio demonstrations</p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-600/50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <FaLock className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Professional Repository Notice</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong>Public repositories displayed only.</strong> The majority of my professional work, 
                    including client projects, enterprise applications, and commercial software, are maintained 
                    in private repositories due to confidentiality agreements, client privacy requirements, 
                    and company intellectual property policies. The public repositories showcase my coding 
                    style, open-source contributions, and personal projects that demonstrate my technical capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://github.com/faiznasir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                View My GitHub Profile
              </a>
              <p className="text-gray-400 text-sm mt-4">
                Connect with me on GitHub to see my latest contributions and projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 