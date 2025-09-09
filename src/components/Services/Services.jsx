import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaGraduationCap,
  FaUserGraduate,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaCertificate,
  FaLanguage,
  FaBus,
  FaClock,
  FaLaptop,
  FaMicroscope,
  FaCalculator,
  FaPalette,
  FaFlask,
  FaGlobe,
  FaComments,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaAward,
  FaHandsHelping
} from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedService, setSelectedService] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  // Service Categories
  const categories = [
    { id: 'all', label: 'All Services', icon: <FaStar /> },
    { id: 'tutoring', label: 'Tutoring', icon: <FaChalkboardTeacher /> },
    { id: 'courses', label: 'Courses', icon: <FaBook /> },
    { id: 'exam', label: 'Exam Prep', icon: <FaCertificate /> },
    { id: 'support', label: 'Support', icon: <FaHandsHelping /> }
  ]

  // Main Services
  const services = [
    {
      id: 1,
      category: 'tutoring',
      icon: <FaUserGraduate />,
      title: 'Private Tutoring',
      shortDesc: 'One-on-one personalized learning sessions',
      fullDesc: 'Get individual attention with customized lesson plans tailored to your learning style and pace. Our expert tutors work closely with you to identify and address your specific needs.',
      features: [
        'Personalized curriculum',
        'Flexible scheduling',
        'Progress tracking',
        'Regular assessments'
      ],
      subjects: ['Mathematics', 'Sciences', 'Languages', 'All subjects'],
      color: 'blue',
      popular: true
    },
    {
      id: 2,
      category: 'tutoring',
      icon: <FaUsers />,
      title: 'Group Classes',
      shortDesc: 'Interactive small group learning environment',
      fullDesc: 'Join small study groups of 5-10 students for collaborative learning. Benefit from peer interaction while maintaining personalized attention from our teachers.',
      features: [
        'Maximum 10 students',
        'Interactive sessions',
        'Peer learning',
        'Group discussions'
      ],
      subjects: ['All core subjects', 'Language groups', 'Science labs'],
      color: 'orange'
    },
    {
      id: 3,
      category: 'courses',
      icon: <FaMicroscope />,
      title: 'Science Courses',
      shortDesc: 'Comprehensive scientific education programs',
      fullDesc: 'Explore the wonders of science with our comprehensive courses in Physics, Chemistry, and Biology. Includes practical lab sessions and experiments.',
      features: [
        'Lab experiments',
        'Practical applications',
        'Research projects',
        'Scientific methodology'
      ],
      subjects: ['Physics', 'Chemistry', 'Biology', 'Lab Work'],
      color: 'green'
    },
    {
      id: 4,
      category: 'courses',
      icon: <FaCalculator />,
      title: 'Mathematics Programs',
      shortDesc: 'From basic arithmetic to advanced calculus',
      fullDesc: 'Master mathematics with our structured programs covering everything from fundamentals to advanced topics. Build strong problem-solving skills.',
      features: [
        'Step-by-step approach',
        'Problem solving techniques',
        'Real-world applications',
        'Mental math strategies'
      ],
      subjects: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
      color: 'purple'
    },
    {
      id: 5,
      category: 'courses',
      icon: <FaLanguage />,
      title: 'Language Classes',
      shortDesc: 'Master Arabic, French, and English',
      fullDesc: 'Develop fluency in multiple languages with our comprehensive language programs. Focus on speaking, writing, reading, and listening skills.',
      features: [
        'Native speakers',
        'Conversation practice',
        'Grammar mastery',
        'Cultural immersion'
      ],
      subjects: ['Arabic', 'French', 'English', 'Communication'],
      color: 'teal',
      popular: true
    },
    {
      id: 6,
      category: 'exam',
      icon: <FaCertificate />,
      title: 'Exam Preparation',
      shortDesc: 'Intensive preparation for official exams',
      fullDesc: 'Comprehensive exam preparation programs for Lebanese Baccalaureate and other official certificates. Includes mock exams and strategic preparation.',
      features: [
        'Past papers practice',
        'Mock examinations',
        'Time management',
        'Exam strategies'
      ],
      subjects: ['Baccalaureate', 'Brevet', 'University Entrance'],
      color: 'red',
      popular: true
    },
    {
      id: 7,
      category: 'support',
      icon: <FaBook />,
      title: 'Homework Support',
      shortDesc: 'Daily homework assistance and guidance',
      fullDesc: 'Get help with daily homework and assignments. Our tutors provide guidance and ensure you understand concepts, not just complete tasks.',
      features: [
        'Daily assistance',
        'Concept clarification',
        'Study techniques',
        'Assignment help'
      ],
      subjects: ['All subjects', 'Project guidance', 'Research help'],
      color: 'indigo'
    },
    {
      id: 8,
      category: 'support',
      icon: <FaBus />,
      title: 'Transportation Service',
      shortDesc: 'Safe and reliable student transportation',
      fullDesc: 'Convenient door-to-door transportation service ensuring students arrive safely and on time. GPS-tracked vehicles with trained drivers.',
      features: [
        'Door-to-door service',
        'GPS tracking',
        'Trained drivers',
        'Safety protocols'
      ],
      subjects: ['Morning pickup', 'Evening drop-off', 'Flexible routes'],
      color: 'yellow'
    },
    {
      id: 9,
      category: 'courses',
      icon: <FaLaptop />,
      title: 'Computer Skills',
      shortDesc: 'Digital literacy and programming basics',
      fullDesc: 'Develop essential computer skills from basic digital literacy to introductory programming. Prepare for the digital future.',
      features: [
        'MS Office mastery',
        'Internet safety',
        'Basic coding',
        'Digital projects'
      ],
      subjects: ['Computer Basics', 'Office Suite', 'Internet Skills'],
      color: 'cyan'
    },
    {
      id: 10,
      category: 'support',
      icon: <FaHandsHelping />,
      title: 'Learning Support',
      shortDesc: 'Special assistance for learning difficulties',
      fullDesc: 'Specialized support for students with learning difficulties. Our trained specialists provide targeted interventions and adaptive teaching methods.',
      features: [
        'Individual assessment',
        'Adaptive methods',
        'Progress monitoring',
        'Parent consultation'
      ],
      subjects: ['Dyslexia support', 'ADHD strategies', 'Study skills'],
      color: 'pink'
    }
  ]

  // Filter services by category
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  // Service Benefits
  const benefits = [
    { icon: <FaGraduationCap />, text: 'Qualified Teachers' },
    { icon: <FaClock />, text: 'Flexible Schedule' },
    { icon: <FaLanguage />, text: '3 Languages' },
    { icon: <FaAward />, text: 'Proven Results' }
  ]

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

  return (
    <section id="services" className="services-section">
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
            <h2>Our Services</h2>
            <FaStar className="star" />
          </div>
          <p>Comprehensive educational solutions tailored to every student's needs</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="service-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''} color-${service.color}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(service)}
            >
              {service.popular && (
                <div className="popular-badge">
                  <FaStar /> Popular
                </div>
              )}
              
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3>{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>
              
              <div className="service-subjects">
                {service.subjects.slice(0, 3).map((subject, index) => (
                  <span key={index} className="subject-tag">
                    {subject}
                  </span>
                ))}
                {service.subjects.length > 3 && (
                  <span className="subject-tag more">
                    +{service.subjects.length - 3}
                  </span>
                )}
              </div>
              
              <motion.button 
                className="learn-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <FaArrowRight />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Benefits Bar */}
        <motion.div 
          className="benefits-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3>Why Choose Our Services?</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to Start Learning?</h3>
            <p>Choose the perfect service for your educational journey</p>
            <div className="cta-buttons">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGraduationCap /> Get Started
              </motion.button>
              <motion.button 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaComments /> Consult with Us
              </motion.button>
            </div>
          </div>
          <div className="cta-decoration">
            <FaStar className="floating-star star-1" />
            <FaStar className="floating-star star-2" />
            <FaStar className="floating-star star-3" />
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <motion.div 
          className="service-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedService(null)}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-btn"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>
            
            <div className={`modal-header color-${selectedService.color}`}>
              <div className="modal-icon">
                {selectedService.icon}
              </div>
              <h2>{selectedService.title}</h2>
            </div>
            
            <div className="modal-body">
              <p className="modal-description">{selectedService.fullDesc}</p>
              
              <div className="modal-features">
                <h4>Key Features:</h4>
                <ul>
                  {selectedService.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-subjects">
                <h4>Subjects Covered:</h4>
                <div className="subjects-list">
                  {selectedService.subjects.map((subject, index) => (
                    <span key={index} className="subject-pill">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="modal-cta">
                <button className="btn btn-primary">
                  Enroll in {selectedService.title}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Services