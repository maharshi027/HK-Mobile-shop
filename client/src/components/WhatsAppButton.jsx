import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210'

  return (
    <motion.a
      href={`https://wa.me/${number}?text=Hi! I'm interested in your services.`}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      style={{
        position: 'fixed', bottom: '1.5rem', right: '1.5rem',
        zIndex: 999, background: '#25d366',
        width: 56, height: 56, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.6rem', textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)'
      }}
    >
      💬
    </motion.a>
  )
}
