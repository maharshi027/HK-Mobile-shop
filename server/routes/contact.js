const express = require('express')
const nodemailer = require('nodemailer')
const Contact = require('../models/Contact')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
})

// POST /api/contact — public
router.post('/contact', async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body
    if (!name || !phone) return res.status(400).json({ error: 'Name and phone are required.' })

    const contact = await Contact.create({ name, phone, email, service, message })

    // Send email notification to shop owner (non-blocking)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `📱 New Enquiry from ${name}`,
        html: `
          <h2>New Customer Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          <hr/>
          <p style="color:#888;">Received: ${new Date().toLocaleString('en-IN')}</p>
        `
      }).catch(err => console.warn('Email send failed:', err.message))
    }

    res.status(201).json({ success: true, message: 'Enquiry received!', contact })
  } catch (err) {
    res.status(500).json({ error: 'Failed to save enquiry.' })
  }
})

// GET /api/contacts — admin only
router.get('/contacts', authMiddleware, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query
    const query = status ? { status } : {}
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
    const total = await Contact.countDocuments(query)
    res.json({ contacts, total, page: Number(page) })
  } catch {
    res.status(500).json({ error: 'Failed to fetch contacts.' })
  }
})

// PUT /api/contacts/:id — admin only
router.put('/contacts/:id', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body
    const contact = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true })
    if (!contact) return res.status(404).json({ error: 'Contact not found.' })
    res.json({ contact })
  } catch {
    res.status(500).json({ error: 'Update failed.' })
  }
})

// DELETE /api/contacts/:id — admin only
router.delete('/contacts/:id', authMiddleware, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch {
    res.status(500).json({ error: 'Delete failed.' })
  }
})

module.exports = router
