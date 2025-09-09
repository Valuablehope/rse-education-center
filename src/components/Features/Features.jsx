import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaGraduationCap,
  FaUsers,
  FaClock,
  FaLanguage,
  FaChalkboardTeacher,
  FaBus,
  FaLaptop,
  FaBookOpen,
  FaTrophy,
  FaHandsHelping,
  FaCertificate,
  FaChartLine,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft
} from 'react-icons/fa'
import './Features.css'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFeature, setActiveFeature] = useState(0)

  // Main Features
  const mainFeatures = [
    {
      icon: <FaLanguage />,
      title: "Multilingual Support",
      description: "Comprehensive education in Arabic, French, and English",
      details: "Our trilingual approach ensures every student can learn in their preferred language, breaking down language barriers to academic success.",
      color: "blue",
      benefits: ["Arabic instruction", "French programs", "English courses", "Language switching support"]
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Teachers",
      description: "Specialized educators in all subjects",
      details: "Our carefully selected teachers bring years of experience and proven teaching methodologies to help students excel.",
      color: "orange",
      benefits: ["Certified instructors", "Subject specialists", "Continuous training", "Student-focused approach"]
    },
    {
      icon: <FaUsers />,
      title: "Small Class Sizes",
      description: "Personalized attention for every student",
      details: "With limited class sizes, we ensure each student receives the individual attention they need to thrive.",
      color: "green",
      benefits: ["Maximum 10 students", "One-on-one support", "Interactive learning", "Better engagement"]
    },
    {
      icon: <FaCertificate />,
      title: "Exam Preparation",
      description: "Specialized programs for official certificates",
      details: "Tailored preparation programs designed specifically for Lebanese Baccalaureate and other official examinations.",
      color: "purple",
      benefits: ["Past papers practice", "Mock examinations", "Exam strategies", "Stress management"]
    },
    {
      icon: <FaBus />,
      title: "Safe Transportation",
      description: "Convenient and secure transport service",
      details: "We provide safe, reliable transportation to ensure students can focus on learning without worrying about commute.",
      color: "red",
      benefits: ["Door-to-door service", "Trained drivers", "GPS tracking", "Safety protocols"]
    },
    {
      icon: <FaLaptop />,
      title: "Modern Resources",
      description: "Latest educational technology and materials",
      details: "Access to cutting-edge educational resources, digital tools, and comprehensive study materials.",
      color: "teal",
      benefits: ["Digital learning tools", "Online resources", "Updated materials", "Tech integration"]
    }
  ]

  // Additional Features Grid
  const additionalFeatures = [
    {
      icon: <FaClock />,
      title: "Flexible Scheduling",
      description: "Classes that fit your timetable"
    },
    {
      icon: <FaBookOpen />,
      title: "Comprehensive Curriculum",
      description: "All subjects covered thoroughly"
    },
    {
      icon: <FaTrophy />,
      title: "Track Record",
      description: "Proven success with 95% pass rate"
    },
    {
      icon: <FaHandsHelping />,
      title: "Parent Involvement",
      description: "Regular progress updates and meetings"
    },
    {
      icon: <FaChartLine />,
      title: "Progress Monitoring",
      description: "Continuous assessment and feedback"
    },
    {
      icon: <FaGraduationCap />,
      title: "Career Guidance",
      description: "Support for future academic planning"
    }
  ]

  // Student Testimonial
  const testimonial = {
    quote: "RSE Center transformed my academic journey. The teachers are amazing, and the multilingual support helped me excel in all my subjects.",
    author: "Sarah M.",
    grade: "Grade 12 Student",
    rating: 5
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="features" className="features-section">
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
            <h2>Why Choose RSE?</h2>
            <FaStar className="star" />
          </div>
          <p>Discover what makes Rising Stars Education Center the perfect choice for your educational journey</p>
        </motion.div>

        {/* Main Features Showcase */}
        <div className="features-showcase" ref={ref}>
          <motion.div 
            className="features-tabs"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-tab ${activeFeature === index ? 'active' : ''}`}
                variants={itemVariants}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`tab-icon icon-${feature.color}`}>
                  {feature.icon}
                </div>
                <div className="tab-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
                <FaArrowRight className="tab-arrow" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="feature-details"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="details-content"
            >
              <div className={`details-icon icon-${mainFeatures[activeFeature].color}`}>
                {mainFeatures[activeFeature].icon}
              </div>
              <h3>{mainFeatures[activeFeature].title}</h3>
              <p className="details-description">
                {mainFeatures[activeFeature].details}
              </p>
              <div className="benefits-list">
                <h4>Key Benefits:</h4>
                <ul>
                  {mainFeatures[activeFeature].benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <FaCheckCircle className="check-icon" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <FaArrowRight />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Features Grid */}
        <motion.div 
          className="additional-features"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="subsection-title"
            variants={itemVariants}
          >
            More Reasons to Choose RSE
          </motion.h3>
          <div className="features-grid">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="card-icon">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div 
          className="testimonial-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="testimonial-content">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="rating-star" />
              ))}
            </div>
            <div className="testimonial-author">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.grade}</span>
            </div>
          </div>
          <div className="testimonial-decoration">
            <div className="floating-star star-1"><FaStar /></div>
            <div className="floating-star star-2"><FaStar /></div>
            <div className="floating-star star-3"><FaStar /></div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="features-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3>Experience the RSE Difference</h3>
          <p>Join hundreds of successful students who have achieved their academic goals with us</p>
          <div className="cta-buttons">
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGraduationCap /> Start Your Journey
            </motion.button>
            <motion.button 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Visit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features