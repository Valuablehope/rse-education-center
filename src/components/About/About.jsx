import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaGraduationCap, 
  FaUsers, 
  FaAward, 
  FaBook,
  FaGlobe,
  FaChalkboardTeacher,
  FaHandshake,
  FaBullseye,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeTab, setActiveTab] = useState('mission')

  // Statistics data
  const stats = [
    {
      icon: <FaUsers />,
      number: "500+",
      label: "Students Enrolled",
      color: "blue"
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "15+",
      label: "Expert Teachers",
      color: "orange"
    },
    {
      icon: <FaBook />,
      number: "30+",
      label: "Courses Offered",
      color: "gold"
    },
    {
      icon: <FaAward />,
      number: "95%",
      label: "Success Rate",
      color: "blue"
    }
  ]

  // Why Choose RSE
  const whyChooseUs = [
    {
      icon: <FaGlobe />,
      title: "Multilingual Education",
      description: "Comprehensive support in Arabic, French, and English to ensure no student is left behind."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Teachers",
      description: "Specialized educators in all subjects with proven track records of student success."
    },
    {
      icon: <FaHandshake />,
      title: "Personalized Attention",
      description: "Small class sizes and one-on-one support to address individual learning needs."
    },
    {
      icon: <FaBullseye />,
      title: "Exam-Focused Preparation",
      description: "Tailored programs specifically designed for official certificate examinations."
    }
  ]

  // Tab content
  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "At Rising Stars Education Center, we are committed to nurturing academic excellence and building confident learners. Our mission is to provide comprehensive educational support that empowers students to reach their full potential through innovative teaching methods, personalized attention, and a supportive learning environment.",
      icon: <FaBullseye />
    },
    vision: {
      title: "Our Vision",
      content: "To be the leading education center in the region, recognized for transforming students into confident, capable individuals ready to excel in their academic journey and beyond. We envision a future where every student has access to quality education that adapts to their unique learning style.",
      icon: <FaGraduationCap />
    },
    values: {
      title: "Our Values",
      content: "Excellence in education, integrity in all interactions, innovation in teaching methods, inclusivity for all learners, and commitment to continuous improvement. We believe in creating a nurturing environment where students feel valued, motivated, and inspired to achieve their dreams.",
      icon: <FaAward />
    }
  }

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="title-decoration">
            <FaStar className="star" />
            <h2>About Rising Stars</h2>
            <FaStar className="star" />
          </div>
          <p>Where Every Student Shines Bright</p>
        </motion.div>

        {/* Main About Content */}
        <div className="about-content" ref={ref}>
          <motion.div 
            className="about-left"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Welcome Message */}
            <motion.div className="welcome-box" variants={itemVariants}>
              <FaQuoteLeft className="quote-icon" />
              <h3>Welcome to RSE Center</h3>
              <p>
                Rising Stars Education Center is opening soon to support students with 
                private lessons, scientific courses, and comprehensive exam preparation. 
                We offer simplified explanations and specialized teachers in all subjects, 
                ensuring every student receives the attention they deserve.
              </p>
              <div className="director-info">
                <div className="director-text">
                  <strong>Mr. Ali Houeila</strong>
                  <span>Director</span>
                </div>
              </div>
            </motion.div>

            {/* Mission, Vision, Values Tabs */}
            <motion.div className="tabs-container" variants={itemVariants}>
              <div className="tabs-header">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tabContent[tab].icon}
                    <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                  </button>
                ))}
              </div>
              <motion.div 
                className="tab-content"
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4>{tabContent[activeTab].title}</h4>
                <p>{tabContent[activeTab].content}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-right"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Statistics */}
            <motion.div className="stats-grid" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className={`stat-card stat-${stat.color}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <motion.div 
                    className="stat-number"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      type: "spring",
                      stiffness: 200 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Why Choose Us */}
            <motion.div className="why-choose-us" variants={itemVariants}>
              <h3>Why Choose RSE?</h3>
              <div className="features-list">
                {whyChooseUs.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="cta-content">
            <h3>Ready to Start Your Journey?</h3>
            <p>Join us in creating a brighter future through quality education</p>
            <div className="cta-buttons">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaStar /> Enroll Now
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
          <div className="cta-decoration">
            <div className="floating-star star-1"><FaStar /></div>
            <div className="floating-star star-2"><FaStar /></div>
            <div className="floating-star star-3"><FaStar /></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About