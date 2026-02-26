import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{
        style: { background: '#1a1a26', color: '#e8e8f0', border: '1px solid #2a2a3e' }
      }} />
      <Routes>
        {/* Public routes with navbar/footer */}
        <Route path="/" element={<><Navbar /><Home /><Footer /><WhatsAppButton /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /><WhatsAppButton /></>} />
        <Route path="/gallery" element={<><Navbar /><Gallery /><Footer /><WhatsAppButton /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /><WhatsAppButton /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /><WhatsAppButton /></>} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute><AdminDashboard /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}
