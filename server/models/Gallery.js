const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url:      { type: String, required: true },
  caption:  { type: String, trim: true },
  type:     { type: String, enum: ['image', 'video'], default: 'image' },
}, { timestamps: true })

module.exports = mongoose.model('Gallery', gallerySchema)
