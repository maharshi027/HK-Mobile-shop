import { useForm } from 'react-hook-form'
import { useState } from 'react'
import toast from 'react-hot-toast'
import api from '../utils/api'

export default function ContactMiniForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await api.post('/contact', data)
      toast.success('Enquiry sent! We\'ll contact you soon.')
      reset()
    } catch {
      toast.error('Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', background: '#12121a', border: '1px solid #2a2a3e',
    borderRadius: 6, padding: '8px 10px', color: '#e8e8f0',
    fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', marginBottom: '0.5rem',
    outline: 'none'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input style={inputStyle} placeholder="Your Name" {...register('name', { required: true })} />
      <input style={inputStyle} placeholder="Phone Number" {...register('phone', { required: true })} />
      <select style={{ ...inputStyle, marginBottom: '0.5rem' }} {...register('service')}>
        <option value="">Select Service</option>
        <option value="buy-sell-phone">Buy/Sell Phone</option>
        <option value="mobile-cover">Mobile Cover & Sticker</option>
        <option value="aadhaar">Aadhaar / Money Withdrawal</option>
        <option value="video-shoot">Video Shoot / Photography</option>
        <option value="sound-booking">Sound System Booking</option>
        <option value="car-booking">Car Booking</option>
        <option value="other">Other</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%', background: '#ff6b35', color: 'white', border: 'none',
          borderRadius: 6, padding: '8px', fontFamily: 'Syne, sans-serif',
          fontWeight: 700, fontSize: '0.78rem', cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? 'Sending...' : 'Send Enquiry →'}
      </button>
    </form>
  )
}
