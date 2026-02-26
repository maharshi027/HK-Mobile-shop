import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import api from '../utils/api'

const statusColors = { new: '#ff6b35', read: '#eab308', resolved: '#22c55e' }

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  useEffect(() => { fetchContacts() }, [])

  const fetchContacts = async () => {
    try {
      const res = await api.get('/contacts')
      setContacts(res.data.contacts)
    } catch {
      toast.error('Failed to load contacts')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/contacts/${id}`, { status })
      setContacts(prev => prev.map(c => c._id === id ? { ...c, status } : c))
      toast.success(`Marked as ${status}`)
    } catch {
      toast.error('Update failed')
    }
  }

  const deleteContact = async (id) => {
    if (!confirm('Delete this enquiry?')) return
    try {
      await api.delete(`/contacts/${id}`)
      setContacts(prev => prev.filter(c => c._id !== id))
      toast.success('Deleted')
    } catch {
      toast.error('Delete failed')
    }
  }

  const logout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin')
  }

  const filtered = filter === 'all' ? contacts : contacts.filter(c => c.status === filter)
  const counts = { all: contacts.length, new: contacts.filter(c => c.status === 'new').length, read: contacts.filter(c => c.status === 'read').length, resolved: contacts.filter(c => c.status === 'resolved').length }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', padding: '1.5rem' }}>
      <Toaster position="top-right" toastOptions={{ style: { background: '#1a1a26', color: '#e8e8f0', border: '1px solid #2a2a3e' } }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>Admin Dashboard</h1>
            <p style={{ color: '#7070a0', fontSize: '0.78rem' }}>Manage customer enquiries</p>
          </div>
          <button onClick={logout} style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', borderRadius: 8, padding: '8px 16px', cursor: 'pointer', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.8rem' }}>
            Logout
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[['all', 'Total', '#06b6d4'], ['new', 'New', '#ff6b35'], ['read', 'Read', '#eab308'], ['resolved', 'Resolved', '#22c55e']].map(([key, label, color]) => (
            <motion.div key={key} whileHover={{ y: -2 }} onClick={() => setFilter(key)} style={{
              background: filter === key ? `rgba(${key === 'all' ? '6,182,212' : key === 'new' ? '255,107,53' : key === 'read' ? '234,179,8' : '34,197,94'},0.1)` : '#1a1a26',
              border: `1px solid ${filter === key ? color : '#2a2a3e'}`,
              borderRadius: 12, padding: '1.2rem', cursor: 'pointer', textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', fontFamily: 'Syne, sans-serif', fontWeight: 800, color }}>{counts[key]}</div>
              <div style={{ fontSize: '0.72rem', color: '#7070a0', marginTop: '0.2rem' }}>{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contacts */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#7070a0' }}>Loading enquiries...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#7070a0', background: '#1a1a26', borderRadius: 12, border: '1px solid #2a2a3e' }}>
            No enquiries found.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map((c, i) => (
              <motion.div key={c._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                style={{ background: '#1a1a26', border: '1px solid #2a2a3e', borderRadius: 12, padding: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>{c.name}</span>
                      <span style={{ fontSize: '0.65rem', background: `rgba(255,107,53,0.1)`, border: '1px solid rgba(255,107,53,0.3)', color: '#ff6b35', borderRadius: 4, padding: '2px 8px' }}>{c.service || 'General'}</span>
                      <span style={{ fontSize: '0.65rem', background: `${statusColors[c.status]}22`, border: `1px solid ${statusColors[c.status]}44`, color: statusColors[c.status], borderRadius: 4, padding: '2px 8px' }}>{c.status}</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#7070a0', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                      <span>📞 {c.phone}</span>
                      {c.email && <span>✉️ {c.email}</span>}
                      <span>🕙 {new Date(c.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    {c.message && <p style={{ fontSize: '0.78rem', color: '#a0a0c0', marginTop: '0.6rem', fontStyle: 'italic' }}>"{c.message}"</p>}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {c.status !== 'read' && <button onClick={() => updateStatus(c._id, 'read')} style={{ background: 'rgba(234,179,8,0.15)', border: '1px solid rgba(234,179,8,0.3)', color: '#eab308', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>Mark Read</button>}
                    {c.status !== 'resolved' && <button onClick={() => updateStatus(c._id, 'resolved')} style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>Resolve</button>}
                    <button onClick={() => deleteContact(c._id)} style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>Delete</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
