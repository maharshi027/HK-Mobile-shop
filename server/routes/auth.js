const express = require('express')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ error: 'Username and password required.' })

    const admin = await Admin.findOne({ username })
    if (!admin) return res.status(401).json({ error: 'Invalid credentials.' })

    const isMatch = await admin.comparePassword(password)
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials.' })

    // Update last login
    admin.lastLogin = new Date()
    await admin.save()

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    )

    res.json({ token, admin: { username: admin.username, role: admin.role } })
  } catch (err) {
    res.status(500).json({ error: 'Server error.' })
  }
})

// GET /api/auth/me - verify token
router.get('/me', authMiddleware, (req, res) => {
  res.json({ admin: req.admin })
})

module.exports = router
