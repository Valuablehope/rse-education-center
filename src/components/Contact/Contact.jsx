import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaStar,
  FaUserGraduate,
  FaBookOpen,
  FaLanguage
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  })

  // Contact Information
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "76678911",
      link: "tel:76678911",
      color: "blue"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      info: "76678911",
      link: "https://wa.me/96176678911",
      color: "green"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "info@rsecenter.edu",
      link: "mailto:info@rsecenter.edu",
      color: "orange"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Qana – Al-Saha, opposite Ali Haidar Building",
      link: "#map",
      color: "red"
    }
  ]

  // Business Hours
  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 3:00 PM" }
  ]

  // Social Media Links
  const socialLinks = [
    { icon: <FaFacebookF />, link: "#", label: "Facebook" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn" },
    { icon: <FaWhatsapp />, link: "https://wa.me/96176678911", label: "WhatsApp" }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitted: false, submitting: true, error: null })

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false, error: null })
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, submitting: false, error: null })
      }, 5000)
    }, 2000)
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
    <section id="contact" className="contact-section">
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
            <h2>Get In Touch</h2>
            <FaStar className="star" />
          </div>
          <p>Ready to start your educational journey? We're here to help!</p>
        </motion.div>

        <div className="contact-content" ref={ref}>
          {/* Left Side - Contact Form */}
          <motion.div 
            className="contact-left"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="contact-form-container" variants={itemVariants}>
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                    <FaUserGraduate className="input-icon" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                    <FaEnvelope className="input-icon" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+961 XX XXX XXX"
                    />
                    <FaPhone className="input-icon" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="enrollment">Enrollment</option>
                      <option value="courses">Course Information</option>
                      <option value="tutoring">Private Tutoring</option>
                      <option value="other">Other</option>
                    </select>
                    <FaBookOpen className="input-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us how we can help you..."
                  />
                  <FaLanguage className="input-icon textarea-icon" />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={formStatus.submitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {formStatus.submitted && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Info & Map */}
          <motion.div 
            className="contact-right"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Contact Cards */}
            <motion.div className="contact-cards" variants={itemVariants}>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className={`contact-card card-${item.color}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="card-icon">{item.icon}</div>
                  <div className="card-content">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Business Hours */}
            <motion.div className="business-hours" variants={itemVariants}>
              <h3>
                <FaClock /> Business Hours
              </h3>
              <div className="hours-list">
                {businessHours.map((item, index) => (
                  <div key={index} className="hour-item">
                    <span className="day">{item.day}</span>
                    <span className="hours">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="hours-note">
                <FaStar className="note-icon" />
                <p>Special tutoring sessions available by appointment</p>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div className="map-container" variants={itemVariants} id="map">
              <div className="map-placeholder">
                <FaMapMarkerAlt className="map-icon" />
                <h4>Find Us Here</h4>
                <p>Qana – Al-Saha</p>
                <p>Opposite Ali Haidar Building</p>
                <p>(Sdiqin/Aytit junction)</p>
                <motion.a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="social-section" variants={itemVariants}>
              <h3>Connect With Us</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="cta-background">
            <div className="cta-content">
              <h3>Ready to Excel in Your Studies?</h3>
              <p>Join Rising Stars Education Center and unlock your full potential</p>
              <div className="cta-features">
                <div className="cta-feature">
                  <FaUserGraduate />
                  <span>Expert Teachers</span>
                </div>
                <div className="cta-feature">
                  <FaBookOpen />
                  <span>All Subjects</span>
                </div>
                <div className="cta-feature">
                  <FaLanguage />
                  <span>Multilingual Support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact