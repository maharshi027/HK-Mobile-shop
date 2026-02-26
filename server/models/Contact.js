const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  phone:   { type: String, required: true, trim: true },
  email:   { type: String, trim: true, lowercase: true },
  service: { type: String, trim: true },
  message: { type: String, trim: true },
  status:  { type: String, enum: ['new', 'read', 'resolved'], default: 'new' },
}, { timestamps: true })

module.exports = mongoose.model('Contact', contactSchema)
