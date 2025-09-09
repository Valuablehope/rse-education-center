import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaBars, 
  FaTimes, 
  FaPhone, 
  FaMapMarkerAlt,
  FaGraduationCap,
  FaStar
} from 'react-icons/fa'
import logo from '../../assets/logo_rse.png'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Navigation items
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'team', label: 'Our Team', href: '#team' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  // Smooth scroll to section
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offset = 80 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setIsOpen(false)
  }

  const navbarVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-item">
              <FaMapMarkerAlt />
              <span>Qana – Al-Saha, opposite Ali Haidar Building</span>
            </div>
            <div className="top-bar-item">
              <FaPhone />
              <a href="tel:76678911">76678911</a>
            </div>
            <div className="top-bar-item">
              <FaGraduationCap />
              <span>Opening Soon!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <motion.div 
              className="navbar-logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
                <img src={logo} alt="RSE - Rising Stars Education Center" />
                <div className="logo-text">
                  <span className="logo-title">RSE</span>
                  <span className="logo-subtitle">Rising Stars Education</span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="navbar-menu">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span 
                        className="active-indicator"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div 
              className="navbar-cta"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                <FaStar className="star-icon" />
                Enroll Now
              </motion.button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button 
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div 
                className="mobile-menu"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="mobile-menu-header">
                  <img src={logo} alt="RSE" />
                  <h3>Rising Stars Education</h3>
                </div>
                
                <ul className="mobile-nav-items">
                  {navItems.map((item) => (
                    <motion.li 
                      key={item.id}
                      variants={mobileItemVariants}
                    >
                      <a 
                        href={item.href}
                        className={activeSection === item.id ? 'active' : ''}
                        onClick={(e) => scrollToSection(e, item.href)}
                      >
                        <span className="nav-icon">
                          <FaStar />
                        </span>
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mobile-menu-footer">
                  <button 
                    className="btn btn-primary btn-block"
                    onClick={(e) => scrollToSection(e, '#contact')}
                  >
                    Enroll Now
                  </button>
                  <div className="mobile-contact">
                    <p><FaPhone /> 76678911</p>
                    <p><FaMapMarkerAlt /> Qana – Al-Saha</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar