import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const services = [
  { icon: '📱', title: 'Buy / Sell Phones', desc: 'New & old phones at best prices' },
  { icon: '🔲', title: 'Mobile Covers', desc: 'Covers, stickers & screen guards' },
  { icon: '🪪', title: 'Aadhaar Services', desc: 'Aadhaar & money withdrawal' },
  { icon: '🎬', title: 'Video Shoot', desc: 'Wedding & party photography' },
  { icon: '🔊', title: 'Sound Booking', desc: 'Sound systems for all events' },
  { icon: '🚗', title: 'Car Booking', desc: 'Marriage & event car hire' },
]

const bannerSlides = [
  { title: 'Best Mobile Deals', sub: 'New & Old Phones at Unbeatable Prices', color: '#ff6b35' },
  { title: 'Event Services', sub: 'Video Shoot · Sound · Car Booking', color: '#7c3aed' },
  { title: 'All Mobile Accessories', sub: 'Covers · Stickers · Templates', color: '#06b6d4' },
]

export default function Home() {
  return (
    <div>
      <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 6, repeat: Infinity }}
            style={{ position: 'absolute', top: '20%', left: '20%', width: 400, height: 400, background: 'radial-gradient(circle, #ff6b35, transparent)', borderRadius: '50%' }} />
          <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }}
            style={{ position: 'absolute', bottom: '10%', right: '15%', width: 350, height: 350, background: 'radial-gradient(circle, #7c3aed, transparent)', borderRadius: '50%' }} />
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.7rem', color: '#06b6d4', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            📍 Your Trusted Mobile Shop
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem,6vw,4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Mobile Accessories<br /><span style={{ color: '#ff6b35' }}>& Event Services</span>
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#7070a0', maxWidth: 500, margin: '0 auto 2rem' }}>
            One stop for phones, covers, wedding video shoots, sound systems & car bookings.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" style={{ background: '#ff6b35', color: 'white', padding: '12px 28px', borderRadius: 8, textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>
              Explore Services →
            </Link>
            <Link to="/contact" style={{ background: 'transparent', color: '#e8e8f0', padding: '12px 28px', borderRadius: 8, border: '1px solid #2a2a3e', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3000 }} pagination={{ clickable: true }} loop style={{ borderRadius: 16, overflow: 'hidden' }}>
            {bannerSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div style={{ background: `linear-gradient(135deg, ${slide.color}22, #12121a)`, border: `1px solid ${slide.color}44`, borderRadius: 16, padding: '3rem 2rem', textAlign: 'center', minHeight: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, color: slide.color, marginBottom: '0.5rem' }}>{slide.title}</h2>
                  <p style={{ fontSize: '0.9rem', color: '#7070a0' }}>{slide.sub}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, marginBottom: '0.5rem' }}>Our <span style={{ color: '#ff6b35' }}>Services</span></h2>
            <p style={{ color: '#7070a0', fontSize: '0.85rem' }}>Everything you need under one roof</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem' }}>
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6, borderColor: '#ff6b35' }}
                style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, padding: '1.5rem', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.3s' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.7rem' }}>{s.icon}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>{s.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#7070a0' }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem', background: '#12121a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Watch Our <span style={{ color: '#ff6b35' }}>Shop</span></h2>
          <div style={{ background: '#0a0a0f', border: '1px solid #2a2a3e', borderRadius: 16, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '3rem' }}>🎥</div>
            <p style={{ color: '#7070a0', fontSize: '0.85rem' }}>Shop video goes here — replace with &lt;video&gt; or YouTube embed</p>
            <code style={{ fontSize: '0.72rem', color: '#ff6b35', background: '#1a1a26', padding: '4px 12px', borderRadius: 4 }}>
              &lt;video src="/videos/shop.mp4" autoPlay muted loop /&gt;
            </code>
          </div>
        </div>
      </section>
    </div>
  )
}
