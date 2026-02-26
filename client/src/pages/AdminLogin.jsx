import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import api from '../utils/api'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await api.post('/auth/login', { username, password })
      localStorage.setItem('adminToken', res.data.token)
      toast.success('Login successful!')
      navigate('/admin/dashboard')
    } catch {
      toast.error('Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', background: '#0a0a0f', border: '1px solid #2a2a3e',
    borderRadius: 8, padding: '12px 14px', color: '#e8e8f0',
    fontSize: '0.85rem', fontFamily: 'DM Mono, monospace', outline: 'none', marginBottom: '1rem'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <Toaster position="top-right" toastOptions={{ style: { background: '#1a1a26', color: '#e8e8f0', border: '1px solid #2a2a3e' } }} />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 16, padding: '2.5rem', width: '100%', maxWidth: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🔐</div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem' }}>Admin Login</h1>
          <p style={{ color: '#7070a0', fontSize: '0.78rem', marginTop: '0.4rem' }}>Shop Owner Access Only</p>
        </div>
        <form onSubmit={handleLogin}>
          <input style={inputStyle} type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          <input style={inputStyle} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ width: '100%', background: '#ff6b35', color: 'white', border: 'none', borderRadius: 8, padding: '14px', fontFamily: 'Syne, sans-serif', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Logging in...' : 'Login →'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
