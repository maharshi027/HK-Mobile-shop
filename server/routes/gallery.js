const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Gallery = require('../models/Gallery')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// Ensure uploads dir exists
const uploadDir = path.join(__dirname, '../uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`)
})
const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|mp4|mov|avi/
    if (allowed.test(path.extname(file.originalname).toLowerCase())) cb(null, true)
    else cb(new Error('Only image and video files are allowed.'))
  }
})

// GET /api/gallery — public
router.get('/', async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 })
    res.json({ items })
  } catch {
    res.status(500).json({ error: 'Failed to fetch gallery.' })
  }
})

// POST /api/gallery — admin only
router.post('/', authMiddleware, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded.' })
    const type = /mp4|mov|avi/.test(path.extname(req.file.originalname).toLowerCase()) ? 'video' : 'image'
    const item = await Gallery.create({
      filename: req.file.filename,
      url: `/uploads/${req.file.filename}`,
      caption: req.body.caption || '',
      type,
    })
    res.status(201).json({ item })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// DELETE /api/gallery/:id — admin only
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const item = await Gallery.findByIdAndDelete(req.params.id)
    if (item) {
      const filePath = path.join(__dirname, '../uploads', item.filename)
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
    }
    res.json({ success: true })
  } catch {
    res.status(500).json({ error: 'Delete failed.' })
  }
})

module.exports = router
