'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import styles from './page.module.css'

const Heart3D = dynamic(() => import('../components/Heart3D'), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading 3D Heart...</div>
})

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.heartIcon}>❤️</span>
          <span className={styles.logoText}>CardioLife</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Advanced Heart Care
            <br />
            <span className={styles.titleAccent}>For a Healthier Tomorrow</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            World-class cardiovascular treatment with cutting-edge technology
            and compassionate care
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.heroButtons}
          >
            <button className={styles.primaryBtn}>Book Appointment</button>
            <button className={styles.secondaryBtn}>Emergency Care</button>
          </motion.div>
        </div>

        <div className={styles.canvas3D}>
          <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
            <Heart3D />
          </Suspense>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          Our Services
        </motion.h2>
        <div className={styles.servicesGrid}>
          {[
            {
              icon: '🫀',
              title: 'Cardiac Surgery',
              description: 'Advanced surgical procedures for complex heart conditions'
            },
            {
              icon: '🩺',
              title: 'Cardiology',
              description: 'Comprehensive heart disease diagnosis and treatment'
            },
            {
              icon: '⚡',
              title: 'Electrophysiology',
              description: 'Heart rhythm disorder management and treatment'
            },
            {
              icon: '🔬',
              title: 'Preventive Care',
              description: 'Heart health screening and prevention programs'
            },
            {
              icon: '🚑',
              title: '24/7 Emergency',
              description: 'Round-the-clock emergency cardiac care'
            },
            {
              icon: '💊',
              title: 'Rehabilitation',
              description: 'Post-surgery cardiac rehabilitation programs'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={styles.serviceCard}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.aboutContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.aboutText}
          >
            <h2>Why Choose CardioLife?</h2>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Successful Surgeries</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Expert Doctors</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
            <p>
              At CardioLife Heart Hospital, we combine decades of medical expertise
              with the latest cardiovascular technology to provide exceptional care.
              Our team of world-renowned cardiologists and cardiac surgeons are
              dedicated to helping you live a healthier, longer life.
            </p>
            <ul className={styles.features}>
              <li>✓ State-of-the-art surgical facilities</li>
              <li>✓ Minimally invasive procedures</li>
              <li>✓ Personalized treatment plans</li>
              <li>✓ Comprehensive follow-up care</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.contactContent}
        >
          <h2>Get in Touch</h2>
          <p>Schedule your consultation with our expert team today</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <h4>Call Us</h4>
                <p>1-800-HEART-CARE</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <div>
                <h4>Email</h4>
                <p>info@cardiolife.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <h4>Location</h4>
                <p>123 Medical Center Drive</p>
              </div>
            </div>
          </div>
          <button className={styles.primaryBtn}>Schedule Appointment</button>
        </motion.div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 CardioLife Heart Hospital. All rights reserved.</p>
        <p>Excellence in Cardiac Care</p>
      </footer>
    </main>
  )
}
