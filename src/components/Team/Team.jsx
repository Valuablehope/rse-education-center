import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { FaLinkedin, FaEnvelope, FaGraduationCap, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Import component styles
import './Team.css'

const Team = () => {
  // Sample team data - replace with actual data
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Ali Houeila",
      role: "Director",
      category: "management",
      specialization: "Educational Leadership",
      languages: ["Arabic", "English", "French"],
      experience: "15+ years",
      image: "https://via.placeholder.com/400x500/003d6b/ffffff?text=Ali+Houeila",
      bio: "Visionary educational leader dedicated to nurturing young minds and building tomorrow's leaders.",
      linkedin: "#",
      email: "director@rsecenter.edu"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      role: "Mathematics Teacher",
      category: "teacher",
      specialization: "Mathematics & Physics",
      languages: ["English", "French"],
      experience: "10+ years",
      image: "https://via.placeholder.com/400x500/ff7a00/ffffff?text=Sarah+Johnson",
      bio: "Expert in making complex mathematical concepts simple and engaging for all students.",
      linkedin: "#",
      email: "sarah@rsecenter.edu"
    },
    {
      id: 3,
      name: "Prof. Jean Dubois",
      role: "French Language Expert",
      category: "teacher",
      specialization: "French & Literature",
      languages: ["French", "English", "Arabic"],
      experience: "12+ years",
      image: "https://via.placeholder.com/400x500/003d6b/ffffff?text=Jean+Dubois",
      bio: "Native French speaker passionate about language education and cultural exchange.",
      linkedin: "#",
      email: "jean@rsecenter.edu"
    },
    {
      id: 4,
      name: "Ms. Emily White",
      role: "English Teacher",
      category: "teacher",
      specialization: "English & Communication",
      languages: ["English", "Arabic"],
      experience: "8+ years",
      image: "https://via.placeholder.com/400x500/ff7a00/ffffff?text=Emily+White",
      bio: "Specialized in exam preparation and academic English with proven track record.",
      linkedin: "#",
      email: "emily@rsecenter.edu"
    },
    {
      id: 5,
      name: "Mr. Ahmad Hassan",
      role: "Science Teacher",
      category: "teacher",
      specialization: "Chemistry & Biology",
      languages: ["Arabic", "English"],
      experience: "7+ years",
      image: "https://via.placeholder.com/400x500/003d6b/ffffff?text=Ahmad+Hassan",
      bio: "Making science fun and accessible through innovative teaching methods.",
      linkedin: "#",
      email: "ahmad@rsecenter.edu"
    },
    {
      id: 6,
      name: "Ms. Fatima Al-Rashid",
      role: "Arabic Teacher",
      category: "teacher",
      specialization: "Arabic Language & Literature",
      languages: ["Arabic", "English", "French"],
      experience: "9+ years",
      image: "https://via.placeholder.com/400x500/ff7a00/ffffff?text=Fatima+Al-Rashid",
      bio: "Dedicated to preserving and teaching the beauty of Arabic language and culture.",
      linkedin: "#",
      email: "fatima@rsecenter.edu"
    }
  ]

  const [filter, setFilter] = useState('all')

  const filteredTeam = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="team" className="team-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="title-decoration"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <FaStar className="star star-1" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FaStar className="star star-2" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FaStar className="star star-3" />
            </motion.div>
          </motion.div>
          <h2>Our Exceptional Team</h2>
          <p>Meet the dedicated professionals committed to your educational success</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="team-filters"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button 
            variants={itemVariants}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Members
          </motion.button>
          <motion.button 
            variants={itemVariants}
            className={`filter-btn ${filter === 'management' ? 'active' : ''}`}
            onClick={() => setFilter('management')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Management
          </motion.button>
          <motion.button 
            variants={itemVariants}
            className={`filter-btn ${filter === 'teacher' ? 'active' : ''}`}
            onClick={() => setFilter('teacher')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Teachers
          </motion.button>
        </motion.div>

        {/* Team Slider */}
        <motion.div 
          className="team-slider-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              prevEl: '.team-nav-prev',
              nextEl: '.team-nav-next',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                effect: 'slide'
              },
              968: {
                slidesPerView: 3,
                effect: 'slide'
              },
              1200: {
                slidesPerView: 4,
                effect: 'slide'
              }
            }}
            className="team-swiper"
          >
            {filteredTeam.map((member, index) => (
              <SwiperSlide key={member.id}>
                <motion.div 
                  className="team-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="card-inner">
                    <div className="team-image">
                      <img src={member.image} alt={member.name} />
                      <div className="image-overlay">
                        <div className="social-links">
                          <motion.a 
                            href={member.linkedin} 
                            aria-label="LinkedIn"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaLinkedin />
                          </motion.a>
                          <motion.a 
                            href={`mailto:${member.email}`} 
                            aria-label="Email"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaEnvelope />
                          </motion.a>
                        </div>
                      </div>
                      <div className="experience-badge">{member.experience}</div>
                    </div>
                    <div className="team-info">
                      <h3>{member.name}</h3>
                      <p className="role">{member.role}</p>
                      <div className="specialization">
                        <FaGraduationCap />
                        <span>{member.specialization}</span>
                      </div>
                      <p className="bio">{member.bio}</p>
                      <div className="languages">
                        <strong>Languages:</strong>
                        <div className="language-tags">
                          {member.languages.map((lang, langIndex) => (
                            <motion.span 
                              key={langIndex} 
                              className="language-tag"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: langIndex * 0.1 }}
                            >
                              {lang}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <motion.button 
            className="team-nav-prev nav-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button 
            className="team-nav-next nav-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Team