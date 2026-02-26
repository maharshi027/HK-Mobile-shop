import { Link } from 'react-router-dom'
import ContactMiniForm from './ContactMiniForm'

export default function Footer() {
  const shopName = import.meta.env.VITE_SHOP_NAME || 'Himanshu Mobile Accessories'
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER || '6388983399'

  return (
    <footer style={{ background: '#0a0a0f', borderTop: '1px solid #2a2a3e', padding: '3rem 1.5rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '2rem' }}>

        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#ff6b35', marginBottom: '0.8rem' }}>📱 {shopName}</div>
          <p style={{ fontSize: '0.78rem', color: '#7070a0', lineHeight: 1.8 }}>
            Your one-stop shop for mobile accessories, services, event bookings, and more.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" style={{ background: '#25d366', color: 'white', padding: '6px 14px', borderRadius: 6, fontSize: '0.75rem', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Address & Contact */}
        <div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#e8e8f0', marginBottom: '0.8rem' }}>📍 Visit Us</div>
          <p style={{ fontSize: '0.78rem', color: '#7070a0', lineHeight: 2 }}>
            Daak Bangla, Mahoba<br />
            Mahoba, Uttar Pradesh – 210427<br />
            📞 +91 6388983399<br />
            ✉️ himanshukushwaha3399@gmail.com
          </p>
          <p style={{ fontSize: '0.72rem', color: '#7070a0', marginTop: '0.5rem' }}>
            🕙 Mon–Sat: 9 AM – 8 PM<br />
            🕙 Sun: 10 AM – 5 PM
          </p>
        </div>

      
        <div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#e8e8f0', marginBottom: '0.8rem' }}>🔗 Quick Links</div>
          {[['/', 'Home'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link key={to} to={to} style={{ display: 'block', fontSize: '0.78rem', color: '#7070a0', textDecoration: 'none', marginBottom: '0.4rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#ff6b35'}
              onMouseLeave={e => e.target.style.color = '#7070a0'}
            >
              → {label}
            </Link>
          ))}
        </div>

        {/* Quick Contact */}
        <div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#e8e8f0', marginBottom: '0.8rem' }}>✉️ Quick Enquiry</div>
          <ContactMiniForm />
        </div>
      </div>

      <div style={{ borderTop: '1px solid #2a2a3e', marginTop: '2rem', paddingTop: '1.2rem', textAlign: 'center', fontSize: '0.72rem', color: '#7070a0' }}>
        © {new Date().getFullYear()} {shopName}. All rights reserved. &nbsp;|&nbsp;
        <Link to="/admin" style={{ color: '#7070a0', textDecoration: 'none' }}>Admin</Link>
      </div>
    </footer>
  )
}
