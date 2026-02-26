import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #2a2a3e',
        transition: 'background 0.3s'
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#ff6b35', letterSpacing: '0.05em' }}>
          📱 Himanshu Mobile Accessories
        </Link>

        <div className="desktop-links" style={{ display: 'flex', gap: '2rem' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              textDecoration: 'none',
              fontSize: '0.8rem',
              color: location.pathname === l.to ? '#ff6b35' : '#7070a0',
              transition: 'color 0.2s',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e8e8f0', fontSize: '1.4rem', display: 'none' }} className="hamburger">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ background: '#12121a', borderTop: '1px solid #2a2a3e', overflow: 'hidden' }}
          >
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                display: 'block', padding: '1rem 1.5rem',
                textDecoration: 'none', fontFamily: 'Syne, sans-serif',
                fontSize: '0.9rem', color: location.pathname === l.to ? '#ff6b35' : '#e8e8f0',
                borderBottom: '1px solid #2a2a3e'
              }}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:640px) {
          .desktop-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
