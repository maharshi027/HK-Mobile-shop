import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const galleryItems = [
  { type: 'image', src: '/gallery/shop1.jpg', caption: 'Our Shop Front' },
  { type: 'image', src: '/gallery/products1.jpg', caption: 'Mobile Accessories' },
  { type: 'image', src: '/gallery/event1.jpg', caption: 'Wedding Shoot' },
  { type: 'image', src: '/gallery/shop2.jpg', caption: 'Inside the Shop' },
  { type: 'image', src: '/gallery/products2.jpg', caption: 'Mobile Covers Collection' },
  { type: 'image', src: '/gallery/event2.jpg', caption: 'Sound System Setup' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ padding: '3rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.7rem', color: '#06b6d4', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Photos & Videos</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '0.8rem' }}>
          Our <span style={{ color: '#ff6b35' }}>Gallery</span>
        </h1>
        <p style={{ color: '#7070a0', fontSize: '0.9rem' }}>Take a look at our shop, products, and events.</p>
      </motion.div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1rem' }}>
        {galleryItems.map((item, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(item)}
            style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Replace with actual <img /> when you have images */}
            <div style={{ textAlign: 'center', color: '#7070a0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🖼️</div>
              <div style={{ fontSize: '0.75rem' }}>{item.caption}</div>
              <div style={{ fontSize: '0.65rem', marginTop: '0.3rem', color: '#ff6b35' }}>{item.src}</div>
            </div>
            {/* Uncomment when you have actual images:
            <img src={item.src} alt={item.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
          </motion.div>
        ))}
      </div>

      {/* Video Section */}
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', marginBottom: '1.5rem' }}>
          Shop <span style={{ color: '#ff6b35' }}>Videos</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1rem' }}>
          {[{ title: 'Shop Tour', desc: 'Take a virtual tour of our store' }, { title: 'Wedding Shoot Highlight', desc: 'Sample wedding video' }].map((v, i) => (
            <div key={i} style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.8rem' }}>▶️</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '0.4rem' }}>{v.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#7070a0', marginBottom: '0.8rem' }}>{v.desc}</div>
              <code style={{ fontSize: '0.65rem', color: '#ff6b35' }}>Replace with &lt;video&gt; or YouTube iframe</code>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 16, padding: '2rem', maxWidth: 600, width: '100%', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🖼️</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '0.5rem' }}>{selected.caption}</div>
              <div style={{ fontSize: '0.75rem', color: '#7070a0' }}>{selected.src}</div>
              <button onClick={() => setSelected(null)} style={{ marginTop: '1.5rem', background: '#ff6b35', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', cursor: 'pointer', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
