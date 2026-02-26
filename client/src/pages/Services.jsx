import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '📱', title: 'Buy New Phones',
    desc: 'Latest smartphones from all top brands at competitive prices. Genuine products with warranty.',
    tags: ['Samsung', 'iPhone', 'Realme', 'Xiaomi']
  },
  {
    icon: '🔄', title: 'Sell / Exchange Old Phones',
    desc: 'Get the best value for your old phone. Instant cash or exchange for a new device.',
    tags: ['Instant Cash', 'Fair Pricing', 'All Brands']
  },
  {
    icon: '🔲', title: 'Mobile Covers & Cases',
    desc: 'Stylish covers, flip cases, back covers for all phone models.',
    tags: ['All Models', 'Custom Print', 'Bulk Orders']
  },
  {
    icon: '🎨', title: 'Stickers & Templates',
    desc: 'Custom mobile skins, stickers, and screen templates. Personalize your device.',
    tags: ['Custom Design', 'Waterproof', 'Easy Apply']
  },
  {
    icon: '💰', title: 'Money Withdrawal',
    desc: 'Secure and convenient money withdrawal services. Multiple bank support.',
    tags: ['All Banks', 'Instant', 'Secure']
  },
  {
    icon: '🎬', title: 'Wedding Video Shoot',
    desc: 'Professional videography for weddings, engagements and special events.',
    tags: ['HD Quality', 'Cinematic', 'Drone Available']
  },
  {
    icon: '📷', title: 'Photography / Party Shoot',
    desc: 'Birthday parties, corporate events — capture every moment beautifully.',
    tags: ['Edited Photos', 'Reels', 'Albums']
  },
  {
    icon: '🔊', title: 'Sound System Booking',
    desc: 'Book professional sound systems for parties, weddings, and events.',
    tags: ['DJ Setup', 'Speaker Hire', 'All Event Sizes']
  },
  {
    icon: '🚗', title: 'Car Booking for Marriage',
    desc: 'Decorated wedding cars for bridal entry. Multiple car options available.',
    tags: ['Decorated', 'Driver Included', 'Multiple Options']
  },
  {
    icon: '📢', title: 'Mobile Advertising',
    desc: 'Promote your business with digital advertising on mobile platforms.',
    tags: ['Social Media', 'Video Ads', 'Graphics']
  },
  {
    icon: '🛡️', title: 'Screen Guard Fitting',
    desc: 'Professional tempered glass and screen guard installation. Bubble-free.',
    tags: ['All Models', 'Anti-Glare', 'Privacy Guard']
  },
]

export default function Services() {
  return (
    <div style={{ padding: '3rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.7rem', color: '#06b6d4', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>What We Offer</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '0.8rem' }}>
          Our <span style={{ color: '#ff6b35' }}>Services</span>
        </h1>
        <p style={{ color: '#7070a0', fontSize: '0.9rem' }}>From mobile accessories to event services — we do it all.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.2rem' }}>
        {services.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4, borderColor: '#ff6b35' }}
            style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, padding: '1.5rem', transition: 'all 0.3s' }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>{s.icon}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{s.title}</div>
            <p style={{ fontSize: '0.78rem', color: '#7070a0', lineHeight: 1.7, marginBottom: '0.8rem' }}>{s.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {s.tags.map(t => (
                <span key={t} style={{ fontSize: '0.65rem', background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.3)', color: '#ff6b35', borderRadius: 4, padding: '2px 8px' }}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ marginTop: '3rem', textAlign: 'center', background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 16, padding: '2.5rem' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.8rem' }}>
          Need a custom service?
        </h3>
        <p style={{ color: '#7070a0', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Contact us and we'll help you out!</p>
        <Link to="/contact" style={{ background: '#ff6b35', color: 'white', padding: '12px 28px', borderRadius: 8, textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
          Get in Touch →
        </Link>
      </motion.div>
    </div>
  )
}
