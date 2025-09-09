// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaTelegram,
  FaClock,
  FaGraduationCap,
  FaBook,
  FaChalkboardTeacher,
  FaBus,
  FaCertificate,
  FaArrowRight,
  FaStar,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa'
// import logo from '../../assets/logo_rse.png'
const logo = '/logo_rse.png'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Quick Links
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Team', href: '#team' },
    { label: 'Features', href: '#features' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Enrollment', href: '#contact' }
  ]

  // Services Links
  const servicesLinks = [
    { icon: <FaBook />, label: 'Private Tutoring', href: '#services' },
    { icon: <FaChalkboardTeacher />, label: 'Group Classes', href: '#services' },
    { icon: <FaCertificate />, label: 'Exam Preparation', href: '#services' },
    { icon: <FaBus />, label: 'Transportation', href: '#services' },
    { icon: <FaGraduationCap />, label: 'Career Guidance', href: '#services' }
  ]

  // Contact Info
  const contactInfo = [
    { icon: <FaPhone />, label: 'Phone', value: '76678911', link: 'tel:76678911' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '76678911', link: 'https://wa.me/96176678911' },
    { icon: <FaEnvelope />, label: 'Email', value: 'info@rsecenter.edu', link: 'mailto:info@rsecenter.edu' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Qana – Al-Saha', link: '#' }
  ]

  // Social Media
  const socialMedia = [
    { icon: <FaFacebookF />, label: 'Facebook', link: '#', color: '#1877f2' },
    { icon: <FaInstagram />, label: 'Instagram', link: '#', color: '#e4405f' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', link: '#', color: '#0a66c2' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', link: 'https://wa.me/96176678911', color: '#25d366' },
    { icon: <FaYoutube />, label: 'YouTube', link: '#', color: '#ff0000' },
    { icon: <FaTelegram />, label: 'Telegram', link: '#', color: '#0088cc' }
  ]

  // Business Hours
  const businessHours = [
    { days: 'Monday - Friday', hours: '8:00 AM - 7:00 PM' },
    { days: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { days: 'Sunday', hours: '10:00 AM - 3:00 PM' }
  ]

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Smooth scroll to section
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="newsletter-text">
              <h3>
                <FaStar className="star-icon" />
                Stay Updated with RSE
              </h3>
              <p>Subscribe to our newsletter for educational tips and updates</p>
            </div>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required
              />
              <motion.button 
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe <FaArrowRight />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <motion.div 
            className="footer-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="footer-section footer-about" variants={itemVariants}>
              <div className="footer-logo">
                <img src={logo} alt="RSE - Rising Stars Education Center" />
                <div className="logo-text">
                  <h3>Rising Stars</h3>
                  <span>Education Center</span>
                </div>
              </div>
              <p className="about-text">
                Empowering students to reach their full potential through quality education, 
                personalized attention, and innovative teaching methods in Arabic, French, and English.
              </p>
              <div className="social-links">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="social-link"
                    aria-label={social.label}
                    style={{ '--social-color': social.color }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      <FaArrowRight className="link-icon" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>Our Services</h4>
              <ul className="footer-links services-links">
                {servicesLinks.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      onClick={(e) => scrollToSection(e, service.href)}
                    >
                      <span className="service-icon">{service.icon}</span>
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Hours */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>Contact Info</h4>
              <div className="contact-list">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="contact-item"
                  >
                    <span className="contact-icon">{item.icon}</span>
                    <span className="contact-value">{item.value}</span>
                  </a>
                ))}
              </div>
              
              <h4 className="hours-title">
                <FaClock /> Business Hours
              </h4>
              <ul className="hours-list">
                {businessHours.map((schedule, index) => (
                  <li key={index}>
                    <span className="days">{schedule.days}</span>
                    <span className="hours">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Rising Stars Education Center. All rights reserved.
              </p>
              <p className="made-with">
                Made with <FaHeart className="heart-icon" /> by Cubiq Solutions
              </p>
            </div>
            <div className="bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button 
        className="back-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-star star-1"><FaStar /></div>
        <div className="decoration-star star-2"><FaStar /></div>
        <div className="decoration-star star-3"><FaStar /></div>
      </div>
    </footer>
  )
}

export default Footer