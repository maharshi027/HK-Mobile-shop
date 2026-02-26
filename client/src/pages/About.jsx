import { motion } from 'framer-motion'

const allServices = [
  '📱 Buy & Sell New/Old Phones', '🔲 Mobile Covers & Cases', '🎨 Stickers & Templates', '💰 Money Withdrawal', '🎬 Wedding Video Shoot',
  '📷 Party Photography', '🔊 Sound System Booking', '🚗 Car Booking for Marriage',
  '📢 Mobile Advertising', '🛡️ Screen Guard Fitting',
]

export default function About() {
  const mapsUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL

  return (
    <div style={{ padding: '3rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.7rem', color: '#06b6d4', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Who We Are</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '0.8rem' }}>
          About <span style={{ color: '#ff6b35' }}>Us</span>
        </h1>
        <p style={{ color: '#7070a0', fontSize: '0.9rem', maxWidth: 600, margin: '0 auto' }}>
          Serving our community with quality mobile services and event solutions since 2024.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, padding: '2rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1rem', color: '#ff6b35' }}>Our Story</h2>
            <p style={{ color: '#7070a0', fontSize: '0.82rem', lineHeight: 1.9 }}>
              We started as a small mobile repair shop and grew into a full-service mobile accessories and event services provider. 
              Our passion is to serve customers with genuine products, fair pricing, and excellent service. 
              Over the years, we've expanded to offer wedding photography, event sound systems, and more.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, padding: '2rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1rem', color: '#ff6b35' }}>📍 Shop Address</h2>
            <p style={{ color: '#7070a0', fontSize: '0.82rem', lineHeight: 2.2 }}>
              🏬 <strong style={{ color: '#e8e8f0' }}>Himanshu Mobile Accessories</strong><br />
              📍 Daak bangla, Mahoba<br />
              &nbsp;&nbsp;&nbsp;&nbsp; Mahoba, Uttar Pradesh – 210427<br />
              📞 +91 6388983399<br />
              📱 +91 8840049828<br />
              ✉️ himanshukushwaha3399@gmail.com<br />
              🕙 Mon–Sat: 9:00 AM – 8:00 PM<br />
              🕙 Sunday: 10:00 AM – 5:00 PM
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          All <span style={{ color: '#ff6b35' }}>Services We Provide</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '0.8rem' }}>
          {allServices.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 8, padding: '0.8rem 1rem', fontSize: '0.8rem', color: '#e8e8f0' }}>
              {s}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1rem' }}>
          📍 Find Us on <span style={{ color: '#ff6b35' }}>Map</span>
        </h2>
        <div style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, overflow: 'hidden', height: 350 }}>
          {mapsUrl && mapsUrl !== 'https://maps.app.goo.gl/7CMVVGptHHxNsgQSA' ? (
            <iframe src={mapsUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Shop Location" />
          ) : (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#7070a0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
              <p style={{ fontSize: '0.85rem' }}>Set VITE_GOOGLE_MAPS_EMBED_URL in your .env to show the map here</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
