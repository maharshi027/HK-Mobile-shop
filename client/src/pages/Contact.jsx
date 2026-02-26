import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import toast from 'react-hot-toast'
import api from '../utils/api'

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210'

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await api.post('/contact', data)
      toast.success('✅ Enquiry sent! We\'ll contact you soon.')
      reset()
    } catch {
      toast.error('❌ Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', background: '#12121a', border: '1px solid #2a2a3e',
    borderRadius: 8, padding: '12px 14px', color: '#e8e8f0',
    fontSize: '0.85rem', fontFamily: 'DM Mono, monospace', outline: 'none',
    transition: 'border-color 0.2s'
  }

  return (
    <div style={{ padding: '3rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.7rem', color: '#06b6d4', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Get In Touch</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '0.8rem' }}>
          Contact <span style={{ color: '#ff6b35' }}>Us</span>
        </h1>
        <p style={{ color: '#7070a0', fontSize: '0.9rem' }}>Have a question or want to book a service? Reach out!</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, padding: '2rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.5rem' }}>Send Enquiry</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <input style={inputStyle} placeholder="Full Name *" {...register('name', { required: 'Name is required' })} />
                {errors.name && <p style={{ color: '#ef4444', fontSize: '0.72rem', marginTop: '4px' }}>{errors.name.message}</p>}
              </div>
              <div>
                <input style={inputStyle} placeholder="Phone Number *" {...register('phone', { required: 'Phone is required' })} />
                {errors.phone && <p style={{ color: '#ef4444', fontSize: '0.72rem', marginTop: '4px' }}>{errors.phone.message}</p>}
              </div>
              <input style={inputStyle} placeholder="Email Address (optional)" type="email" {...register('email')} />
              <select style={{ ...inputStyle, cursor: 'pointer' }} {...register('service', { required: true })}>
                <option value="">Select Service *</option>
                <option value="buy-sell-phone">Buy / Sell Phone</option>
                <option value="mobile-cover">Mobile Cover & Sticker</option>
                <option value="aadhaar">Aadhaar / Money Withdrawal</option>
                <option value="video-shoot">Wedding / Party Video Shoot</option>
                <option value="sound-booking">Sound System Booking</option>
                <option value="car-booking">Car Booking for Marriage</option>
                <option value="advertising">Mobile Advertising</option>
                <option value="other">Other</option>
              </select>
              <textarea style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }} placeholder="Your Message" {...register('message')} />
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ background: '#ff6b35', color: 'white', border: 'none', borderRadius: 8, padding: '14px', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending...' : 'Send Enquiry →'}
              </motion.button>
            </form>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { icon: '📍', title: 'Address', content: 'Daak bangla Mahoba\n Mahoba , Uttar Pradesh – 210427' },
            { icon: '📞', title: 'Phone', content: '+91 6388983399\n+91 8840049828' },
            { icon: '✉️', title: 'Email', content: 'himanshukushwaha3399@gmail.com' },
            { icon: '🕙', title: 'Hours', content: 'Mon–Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 5:00 PM' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, padding: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>{item.title}</div>
                <pre style={{ color: '#7070a0', fontSize: '0.78rem', lineHeight: 1.8, fontFamily: 'DM Mono, monospace', whiteSpace: 'pre-wrap', margin: 0 }}>{item.content}</pre>
              </div>
            </div>
          ))}
          <motion.a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" whileHover={{ scale: 1.02 }}
            style={{ background: '#25d366', color: 'white', borderRadius: 12, padding: '1.2rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            <span style={{ fontSize: '1.5rem' }}>💬</span>
            <div>
              <div>Chat on WhatsApp</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 400, opacity: 0.8 }}>Usually responds within minutes</div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
