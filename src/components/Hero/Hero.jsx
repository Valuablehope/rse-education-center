import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { 
  FaStar, 
  FaGraduationCap, 
  FaBook, 
  FaUsers, 
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaLanguage,
  FaChalkboardTeacher,
  FaCertificate,
  FaBus,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Excellence', 'Success', 'Knowledge', 'Future']

  // Animated words rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  // Hero Statistics
  const stats = [
    { icon: <FaUsers />, number: '500+', label: 'Students' },
    { icon: <FaChalkboardTeacher />, number: '15+', label: 'Teachers' },
    { icon: <FaBook />, number: '30+', label: 'Courses' },
    { icon: <FaCertificate />, number: '95%', label: 'Success Rate' }
  ]

  // Key Features for hero
  const heroFeatures = [
    'Private Lessons & Group Classes',
    'Arabic, French & English Support',
    'Expert Teachers in All Subjects',
    'Safe Transportation Available'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
        <motion.div 
          className="floating-shape shape-1"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="floating-shape shape-2"
          animate={{ 
            x: [0, -70, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="floating-shape shape-3"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <motion.div 
            className="hero-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Opening Badge */}
            <motion.div className="opening-badge" variants={itemVariants}>
              <FaStar className="badge-icon" />
              <span>Opening Soon in Qana!</span>
              <FaStar className="badge-icon" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 className="hero-title" variants={itemVariants}>
              Welcome to
              <span className="highlight"> Rising Stars</span>
              <br />
              Education Center
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div className="hero-subtitle" variants={itemVariants}>
              <span>Where Every Student Achieves</span>
              <div className="word-carousel">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="rotating-word"
                >
                  {words[currentWord]}
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p className="hero-description" variants={itemVariants}>
              Empowering students with comprehensive educational support through private lessons, 
              scientific courses, and exam preparation. Expert teachers, multilingual support, 
              and personalized attention for every learner.
            </motion.p>

            {/* Features List */}
            <motion.ul className="hero-features" variants={itemVariants}>
              {heroFeatures.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <FaCheckCircle className="check-icon" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button
                className="btn btn-primary btn-large"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGraduationCap />
                Enroll Now
                <FaArrowRight className="arrow-icon" />
              </motion.button>
              <motion.button
                className="btn btn-secondary btn-large"
                onClick={() => scrollToSection('about')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay />
                Learn More
              </motion.button>
            </motion.div>

            {/* Contact Info Bar */}
            <motion.div className="hero-contact-bar" variants={itemVariants}>
              <a href="tel:76678911" className="contact-item">
                <FaPhone />
                <span>76678911</span>
              </a>
              <div className="divider">|</div>
              <a href="#contact" className="contact-item">
                <FaMapMarkerAlt />
                <span>Qana – Al-Saha</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Visual */}
            <motion.div 
              className="hero-visual"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="visual-card main-card">
                <div className="card-content">
                  <FaGraduationCap className="card-icon" />
                  <h3>Unlock Your Potential</h3>
                  <p>Join RSE and excel in your studies</p>
                </div>
                <div className="card-decoration">
                  <FaStar className="star star-1" />
                  <FaStar className="star star-2" />
                  <FaStar className="star star-3" />
                </div>
              </div>

              {/* Floating Feature Cards */}
              <motion.div 
                className="feature-card card-1"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-5, 5, -5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaLanguage />
                <span>3 Languages</span>
              </motion.div>

              <motion.div 
                className="feature-card card-2"
                animate={{
                  y: [5, -5, 5],
                  rotate: [5, -5, 5]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaChalkboardTeacher />
                <span>Expert Teachers</span>
              </motion.div>

              <motion.div 
                className="feature-card card-3"
                animate={{
                  y: [-3, 3, -3],
                  x: [-3, 3, -3]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaBus />
                <span>Transportation</span>
              </motion.div>

              <motion.div 
                className="feature-card card-4"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [-10, 10, -10]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaCertificate />
                <span>95% Success</span>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-icon">
            <div className="scroll-wheel"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Stars */}
      <div className="hero-stars">
        <FaStar className="floating-star star-1" />
        <FaStar className="floating-star star-2" />
        <FaStar className="floating-star star-3" />
        <FaStar className="floating-star star-4" />
        <FaStar className="floating-star star-5" />
      </div>
    </section>
  )
}

export default Hero