'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaEnvelope, FaPhone, FaBuilding, FaQuoteLeft, FaStar, FaLinkedin } from 'react-icons/fa'

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

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function ReferralSection() {
  const referrals = [
    {
      name: "Mr. Juhairi Ijam",
      position: "CEO & Director",
      company: "CloudGarden Sdn Bhd",
      email: "sarah.johnson@techglobal.com",
      phone: "+1 (555) 123-4567",
      testimonial: "Faiz is an exceptional developer with remarkable problem-solving skills. His ability to deliver complex projects on time while maintaining high code quality is truly impressive.",
      rating: 5,
      gradient: "from-blue-600 to-cyan-600",
      delay: 0
    },
    {
      name: "Shazril Suhaimi",
      position: "Director",
      company: "Magiska Design Sdn Bhd",
      email: "michael.chen@innovatex.com", 
      phone: "+1 (555) 234-5678",
      testimonial: "Working with Faiz has been a game-changer for our development team. His expertise in full-stack development and AI integration helped us achieve breakthrough results.",
      rating: 5,
      gradient: "from-purple-600 to-pink-600",
      delay: 0.2
    },
    {
      name: "Prof. Madya Dr. Norjansalika Janom",
      position: "FSKM's Dean",
      company: "UiTM Shah Alam",
      email: "norjansalika@uitm.edu.my",
      phone: "+60 3-5544 2000",
      testimonial: "Faiz demonstrated exceptional academic excellence and research capabilities throughout his studies. His analytical thinking, dedication to learning, and ability to bridge theoretical concepts with practical applications make him a standout student and researcher.",
      rating: 5,
      gradient: "from-green-600 to-teal-600",
      delay: 0.4
    },
    {
      name: "Ts. Dr. Mohd Talmizie Amron",
      position: "Head of Center",
      company: "UiTM Kampus Kuala Terengganu",
      email: "talmizie@uitm.edu.my",
      phone: "+60 9-668 4000",
      testimonial: "As an educator, I've observed Faiz's remarkable intellectual curiosity and commitment to academic excellence. His research-oriented mindset, strong problem-solving abilities, and leadership in academic projects reflect his potential for significant contributions to the field of information technology.",
      rating: 5,
      gradient: "from-indigo-600 to-purple-600",
      delay: 0.4
    },
    {
      name: "Mr. Firman Ahmad",
      position: "Head Manager",
      company: "Magiska Design Sdn Bhd",
      email: "firman@magiska.com",
      phone: "+60 9-668 4000",
      testimonial: "Faiz is a dedicated and hardworking employee who consistently delivers high-quality work. His attention to detail and ability to work independently make him a valuable asset to our team.",
      rating: 5,
      gradient: "from-indigo-600 to-purple-600",
      delay: 0.4
    }
  ]

  return (
    <section id="referrals" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={floatingAnimation.animate}
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
        />
        <motion.div 
          animate={{
            ...floatingAnimation.animate,
            transition: { ...floatingAnimation.animate.transition, delay: 1 }
          }}
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20"
        />
        <motion.div 
          animate={{
            ...floatingAnimation.animate,
            transition: { ...floatingAnimation.animate.transition, delay: 2 }
          }}
          className="absolute bottom-20 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-green-400/20 to-teal-400/20"
        />
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
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional References
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Trusted colleagues and industry leaders who can speak to my professional capabilities and work ethic
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {referrals.map((referral, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: referral.delay }}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient Border Animation */}
              <div className={`absolute inset-0 bg-gradient-to-r ${referral.gradient} opacity-20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl`} />
              
              <div className="relative z-10">
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${referral.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <FaUserTie className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{referral.name}</h3>
                    <p className="text-gray-300 text-sm font-medium">{referral.position}</p>
                    <p className="text-gray-400 text-sm">{referral.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(referral.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i + referral.delay, duration: 0.3 }}
                    >
                      <FaStar className="text-yellow-400 text-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mb-6">
                  <FaQuoteLeft className="text-gray-400 mb-3 text-lg" />
                  <p className="text-gray-300 leading-relaxed text-sm italic">
                    "{referral.testimonial}"
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <FaEnvelope className="text-blue-400 flex-shrink-0" />
                    <a href={`mailto:${referral.email}`} className="text-sm truncate hover:underline">
                      {referral.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <FaPhone className="text-green-400 flex-shrink-0" />
                    <a href={`tel:${referral.phone}`} className="text-sm hover:underline">
                      {referral.phone}
                    </a>
                  </div>
                </div>

                {/* Contact Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 px-4 py-3 bg-gradient-to-r ${referral.gradient} rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Contact Reference
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <FaUserTie className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Need Additional References?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I have worked with many other professionals who can provide additional insights into my work quality and professional demeanor. 
              Feel free to request more references for your specific requirements.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaEnvelope />
              Request More References
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 